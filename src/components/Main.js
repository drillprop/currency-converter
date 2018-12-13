import React, { Component } from 'react';
import styled from 'styled-components';
import Currency from './Currency';
import Heading from './Heading';

const StyledMain = styled.main``;

class Main extends Component {
  render() {
    const { amount, currency, getAmount, getCurrency } = this.props;
    return (
      <StyledMain>
        <Heading />
        <input type='number' onChange={getAmount} />
        <select onChange={getCurrency}>
          <option value='usd'>usd</option>
          <option value='eur'>eur</option>
          <option value='czk'>czk</option>
        </select>
        <Currency amount={amount} currency={currency}>
          {value => <div>{value}</div>}
        </Currency>
      </StyledMain>
    );
  }
}

export default Main;
