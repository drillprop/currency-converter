import React from 'react';
import Select from './Select';
import Currency from './Currency';

const PlnCurrency = ({ amount, currency, getCurrency }) => (
  <Currency pln amount={amount} currency={currency}>
    {value => (
      <div style={{ display: 'inline', color: '#666' }}>
        PLN equals {value} <Select getCurrency={getCurrency} />
      </div>
    )}
  </Currency>
);

export default PlnCurrency;
