import React, { Component } from 'react';
import styled from 'styled-components';
import Currency from './Currency';
import Heading from './Heading';
import { sansSerif } from '../utilities/fonts';

const StyledMain = styled.main`
  margin-top: 50px;
  margin-left: 100px;
`;
const StyledInput = styled.input`
  color: #666;
  margin: 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #666;
  font-family: ${sansSerif};
  width: 220px;
  height: 25px;
`;
const StyledSelect = styled.select`
  color: #666;
  margin: 0;
  border: none;
  border-bottom: 1px solid #666;
  height: 28px;
  font-family: ${sansSerif};
  font-size: 16px;
`;

class Main extends Component {
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
      <StyledMain>
        <Heading />
        <StyledInput type='number' onChange={this.getAmount} />
        <StyledSelect onChange={this.getCurrency}>
          <option value='usd'>usd</option>
          <option value='eur'>eur</option>
          <option value='czk'>czk</option>
        </StyledSelect>
        <Currency amount={amount} currency={currency} />
      </StyledMain>
    );
  }
}

export default Main;
