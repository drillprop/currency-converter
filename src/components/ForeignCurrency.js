import React from 'react';
import Select from './Select';
import Currency from './Currency';

const ForeignCurrency = ({ amount, currency, children }) => (
  <>
    {children}
    <Currency amount={amount} currency={currency}>
      {value => (
        <div style={{ display: 'inline', color: '#666' }}>
          equals {value} pln
        </div>
      )}
    </Currency>
  </>
);

export default ForeignCurrency;
