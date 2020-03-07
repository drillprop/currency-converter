import React, { Component, useState } from 'react';
import HomeHeading from './HomeHeading';
import styled from 'styled-components';
import { sansSerif } from '../utilities/fonts';
import Aside from '../elements/Aside';
import SwapButton from './SwapButton';
import ForeignCurrency from './ForeignCurrency';
import PlnCurrency from './PlnCurrency';
import Select from '../elements/Select';
import { StyledMain } from '../elements/Main.js';
import { Container } from '../elements/Container';

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

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [pln, setToPln] = useState(false);

  const getAmount = e => {
    const { currentTarget } = e;
    const amount = currentTarget.value;
    const { length } = amount.toString();
    if (+amount) {
      setAmount(() => amount);
    } else {
      let noLetter = [...amount];
      noLetter.pop();
      noLetter = noLetter.join('');
      e.currentTarget.value = noLetter;
      setAmount(() => noLetter);
    }
    if (length >= 5) {
      e.currentTarget.style.width = `${length * 9}px`;
    }
  };

  const getCurrency = ({ currentTarget }) => {
    setCurrency(() => currentTarget.value);
  };

  const swapCurrency = () => setToPln(() => !pln);

  const currencyArray = ['usd', 'eur', 'czk'];
  return (
    <Container>
      <Aside currency={currency} />
      <StyledMain>
        <HomeHeading currency={currency} pln={pln} />
        <StyledInput
          placeholder='0'
          type='text'
          onChange={getAmount}
          maxLength={15}
        />
        {!pln ? (
          <ForeignCurrency amount={amount} currency={currency}>
            <Select
              getCurrency={getCurrency}
              currency={currency}
              currencyArray={currencyArray}
            />
          </ForeignCurrency>
        ) : (
          <PlnCurrency amount={amount} currency={currency}>
            <Select
              getCurrency={getCurrency}
              currency={currency}
              currencyArray={currencyArray}
            />
          </PlnCurrency>
        )}
        <SwapButton swapCurrency={swapCurrency} />
      </StyledMain>
    </Container>
  );
};

export default Home;
