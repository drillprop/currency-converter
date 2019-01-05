import React, { memo } from 'react';
import Currency from '../utilities/Currency';
import PropTypes from 'prop-types';

const PlnCurrency = memo(({ amount, currency, children }) => (
  <Currency pln amount={amount} currency={currency}>
    {value => (
      <div style={{ display: 'inline', color: '#666' }}>
        PLN equals {value} {children}
      </div>
    )}
  </Currency>
));

PlnCurrency.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  children: PropTypes.object
};

export default PlnCurrency;
