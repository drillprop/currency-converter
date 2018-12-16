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
    const { amount } = this.props;
    const { rate } = this.state;
    const value = (amount * rate).toFixed(2);
    return (
      <div style={{ display: 'inline', color: '#666' }}>
        {' '}
        equals {value} pln
      </div>
    );
  }
}

export default Currency;
