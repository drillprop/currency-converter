import React, { Component } from 'react';
import Currency from './Currency';
import styled from 'styled-components';
import Img from './Img';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  align-items: center;
`;

const Main = styled.main``;
const Aside = styled.aside``;

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
        <Aside>
          <Img currency={currency} />
        </Aside>
        <Main>
          <input type='number' onChange={this.getAmount} />
          <select onChange={this.getCurrency}>
            <option value='usd'>usd</option>
            <option value='eur'>eur</option>
            <option value='czk'>czk</option>
          </select>
          <Currency amount={amount} currency={currency}>
            {value => <div>{value}</div>}
          </Currency>
        </Main>
      </Container>
    );
  }
}
export default App;
