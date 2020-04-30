import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../elements/Layout';
import Select from '../elements/Select';
import { primary } from '../utilities/fonts';
import ForeignCurrency from './ForeignCurrency';
import HomeHeading from './HomeHeading';
import PlnCurrency from './PlnCurrency';
import SwapButton from './SwapButton';

const StyledInput = styled.input`
  color: #666;
  padding: 4px 10px;
  margin: 0;
  font-size: 16px;
  border: none;
  font-family: ${primary};
  width: 50px;
  height: 25px;
`;

const Home = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [pln, setToPln] = useState(false);

  const getAmount = (e) => {
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
    <Layout currency={currency}>
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
    </Layout>
  );
};

export default Home;
