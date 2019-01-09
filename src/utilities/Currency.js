import React, { PureComponent } from 'react';
import Loading from '../elements/Loading';
import PropTypes from 'prop-types';

class Currency extends PureComponent {
  _isMounted = false;
  static propTypes = {
    currency: PropTypes.string
  };
  static defaultProps = {
    currency: 'usd'
  };
  state = {
    rate: 0,
    error: false
  };
  componentDidMount = async () => {
    this._isMounted = true;
    this.fetchRates();
  };

  componentDidUpdate = async prevProps => {
    const { currency } = this.props;
    if (prevProps.currency !== currency) {
      this.fetchRates();
    }
  };
  componentWillUnmount = () => {
    this._isMounted = false;
  };

  fetchRates = async () => {
    const { currency } = this.props;
    try {
      const url = await fetch(
        `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/`
      );
      const json = await url.json();
      const rate = await json.rates[0].mid;
      if (this._isMounted) {
        this.setState({ rate });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
  };

  render() {
    const { amount, children, currency, pln } = this.props;
    const { rate, error } = this.state;
    if (error) {
      return children("Couldn't fetch a data");
    }
    if (rate) {
      const value = pln
        ? (Number(amount) / rate).toFixed(2)
        : (Number(amount) * rate).toFixed(2);
      return children(value, currency);
    } else {
      return children(amount ? <Loading /> : '0.00', currency);
    }
  }
}

export default Currency;
