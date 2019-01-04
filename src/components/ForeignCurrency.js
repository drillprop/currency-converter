import React from 'react';
import Currency from '../utilities/Currency';

const ForeignCurrency = ({ amount, currency, children }) => (
  <>
    <Currency amount={amount} currency={currency}>
      {value => (
        <>
          {children}
          <div style={{ display: 'inline', color: '#666' }}>
            equals {value} PLN
          </div>
        </>
      )}
    </Currency>
  </>
);

export default ForeignCurrency;
