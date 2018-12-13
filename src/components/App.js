import React, { Component } from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Main from './Main';
import GlobalStyle from '../utilities/GlobalStyle';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

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
      <Container>
        <GlobalStyle />
        <Aside currency={currency} />
        <Main
          amount={amount}
          currency={currency}
          getAmount={this.getAmount}
          getCurrency={this.getCurrency}
        />
      </Container>
    );
  }
}
export default App;
