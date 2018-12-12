import React, { Component } from 'react';
import Currency from './Currency';

class App extends Component {
  state = {
    amount: 0,
    currency: 'usd'
  };

  getAmount = e => {
    this.setState({ amount: e.currentTarget.value });
  };
  getCurrency = e => {
    this.setState({
      currency: e.currentTarget.value
    });
  };

  render() {
    const { amount, currency } = this.state;
    return (
      <>
        <main>
          <input type='number' onChange={this.getAmount} />
          <select onChange={this.getCurrency}>
            <option value='usd'>usd</option>
            <option value='eur'>eur</option>
            <option value='czk'>czk</option>
          </select>
          <Currency amount={amount} currency={currency}>
            {value => <div>{value}</div>}
          </Currency>
        </main>
      </>
    );
  }
}
export default App;
