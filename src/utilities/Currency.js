import React, { Component } from 'react';
import Loading from '../elements/Loading';

class Currency extends Component {
  state = {
    rate: 0
  };
  static defaultProps = {
    currency: 'usd'
  };

  componentDidMount = async () => {
    this.fetchRates();
  };

  componentDidUpdate = async prevProps => {
    const { currency } = this.props;
    if (prevProps.currency !== currency) {
      this.fetchRates();
    }
  };

  fetchRates = async () => {
    const { currency } = this.props;
    try {
      const url = await fetch(
        `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/`
      );
      const json = await url.json();
      const rate = await json.rates[0].mid;
      this.setState({ rate });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { amount, children, currency, pln } = this.props;
    const { rate } = this.state;
    if (rate) {
      const value = pln
        ? (amount / rate).toFixed(2)
        : (amount * rate).toFixed(2);
      return children(value, currency);
    } else {
      return children(amount ? <Loading /> : '0.00', currency);
    }
  }
}

export default Currency;
