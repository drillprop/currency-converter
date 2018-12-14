import React, { Component } from 'react';
import styled from 'styled-components';
import Currency from './Currency';
import Heading from './Heading';
import { serif, sansSerif } from '../utilities/fonts';

const StyledMain = styled.main`
  margin-top: 50px;
  margin-left: 100px;
`;
const StyledInput = styled.input`
  margin: 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  font-family: ${sansSerif};
  margin-left: 40px;
  width: 220px;
  height: 25px;
`;
const StyledSelect = styled.select`
  margin: 0;
  border: none;
  border-bottom: 1px solid black;
  height: 27px;
  font-family: ${sansSerif};
  font-size: 16px;
`;

class Main extends Component {
  render() {
    const { amount, currency, getAmount, getCurrency } = this.props;
    return (
      <StyledMain>
        <Heading />
        <StyledInput type='number' onChange={getAmount} />
        <StyledSelect onChange={getCurrency}>
          <option value='usd'>usd</option>
          <option value='eur'>eur</option>
          <option value='czk'>czk</option>
        </StyledSelect>
        <Currency amount={amount} currency={currency}>
          {value => <div style={{ display: 'inline' }}>{value} pln</div>}
        </Currency>
      </StyledMain>
    );
  }
}

export default Main;
