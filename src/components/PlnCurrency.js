import React from 'react';
import Currency from '../utilities/Currency';

const PlnCurrency = ({ amount, currency, children }) => (
  <Currency pln amount={amount} currency={currency}>
    {value => (
      <div style={{ display: 'inline', color: '#666' }}>
        PLN equals {value} {children}
      </div>
    )}
  </Currency>
);

export default PlnCurrency;
