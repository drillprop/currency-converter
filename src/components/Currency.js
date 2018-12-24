import React, { Component } from 'react';

class Currency extends Component {
  state = {
    rate: 1
  };
  static defaultProps = {
    currency: 'usd'
  };
  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      const { currency } = this.props;
      const url = await fetch(
        `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/`
      );
      const json = await url.json();
      const rate = await json.rates[0].mid;
      this.setState({ rate });
    }
  };

  render() {
    const { amount, children, currency } = this.props;
    const { rate } = this.state;
    const value = (amount * rate).toFixed(2);
    return children(value, currency);
  }
}

export default Currency;
