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
    const { children, amount } = this.props;
    const { rate } = this.state;
    return children(amount * rate);
  }
}

export default Currency;
