import React, { Component } from 'react';
import styled from 'styled-components';
import Currency from './Currency';
import Heading from './Heading';
import { sansSerif } from '../utilities/fonts';
import Aside from './Aside';
import SwapButton from './SwapButton';
import Select from './Select';

const StyledMain = styled.main`
  margin-top: 50px;
  margin-left: 100px;
`;
const StyledInput = styled.input`
  color: #666;
  padding: 4px 10px;
  margin: 0;
  font-size: 16px;
  border: none;
  font-family: ${sansSerif};
  width: 50px;
  height: 25px;
`;

class Main extends Component {
  state = {
    amount: 0,
    currency: 'usd',
    swapToPln: false
  };

  getAmount = e => {
    const { currentTarget } = e;
    const amount = currentTarget.value;
    const { length } = amount.toString();
    if (+amount) {
      this.setState({ amount });
    } else {
      e.currentTarget.value = '';
      this.setState({ amount: 0 });
    }
    if (length >= 5) {
      e.currentTarget.style.width = `${length * 9}px`;
    }
  };

  getCurrency = e => {
    this.setState({
      currency: e.currentTarget.value
    });
  };

  swapCurrency = () => {
    this.setState(state => {
      return { swapToPln: !state.swapToPln };
    });
  };

  render() {
    const { amount, currency, swapToPln } = this.state;
    return (
      <>
        <Aside currency={currency} />
        <StyledMain>
          <Heading currency={currency} />
          <StyledInput
            placeholder='0'
            type='text'
            onChange={this.getAmount}
            maxLength={15}
          />
          {!swapToPln ? (
            <>
              <Select getCurrency={this.getCurrency} />
              <Currency amount={amount} currency={currency}>
                {value => (
                  <div style={{ display: 'inline', color: '#666' }}>
                    equals {value} pln
                  </div>
                )}
              </Currency>
            </>
          ) : (
            <Currency amount={amount} currency={currency}>
              {value => (
                <div style={{ display: 'inline', color: '#666' }}>
                  equals {value}
                </div>
              )}
            </Currency>
          )}
          <SwapButton swapCurrency={this.swapCurrency} />
        </StyledMain>
      </>
    );
  }
}

export default Main;
