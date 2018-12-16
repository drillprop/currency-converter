import React, { Component } from 'react';
import styled from 'styled-components';
import Currency from './Currency';
import Heading from './Heading';
import { sansSerif } from '../utilities/fonts';
import Aside from './Aside';

const StyledMain = styled.main`
  margin-top: 50px;
  margin-left: 100px;
`;
const StyledInput = styled.input`
  color: #666;
  margin: 0;
  font-size: 16px;
  border: none;
  font-family: ${sansSerif};
  width: 50px;
  height: 25px;
`;
const StyledSelect = styled.select`
  color: #666;
  margin: 0;
  border: none;
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
    const amount = e.currentTarget.value;
    if (+amount) {
      this.setState({ amount });
    }
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
        <Aside currency={currency} />
        <StyledMain>
          <Heading currency={currency} />
          <StyledInput placeholder='0' type='text' onChange={this.getAmount} />
          <StyledSelect onChange={this.getCurrency}>
            <option value='usd'>usd</option>
            <option value='eur'>eur</option>
            <option value='czk'>czk</option>
          </StyledSelect>
          <Currency amount={amount} currency={currency} />
        </StyledMain>
      </>
    );
  }
}

export default Main;
