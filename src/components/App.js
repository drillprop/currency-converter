import React, { Component } from 'react';
import Currency from './Currency';

class App extends Component {
  state = {
    amount: 0
  };

  getAmount = e => {
    this.setState({ amount: e.currentTarget.value });
  };

  render() {
    const { amount } = this.state;
    return (
      <>
        <input type='number' onChange={this.getAmount} />
        <Currency amount={amount}>{value => <div>{value}</div>}</Currency>
      </>
    );
  }
}
export default App;
