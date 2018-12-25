import React from 'react';
import Select from './Select';
import Currency from './Currency';

const PlnCurrency = ({ amount, currency }) => (
  <Currency amount={amount} currency={currency}>
    {value => (
      <div style={{ display: 'inline', color: '#666' }}>equals {value}</div>
    )}
  </Currency>
);

export default PlnCurrency;
