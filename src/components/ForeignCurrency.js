import React, { memo } from 'react';
import Currency from '../utilities/Currency';
import PropTypes from 'prop-types';

const ForeignCurrency = memo(({ amount, currency, children }) => (
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
));

ForeignCurrency.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  children: PropTypes.object
};

export default ForeignCurrency;
