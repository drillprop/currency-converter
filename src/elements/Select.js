import React, { memo } from 'react';
import styled from 'styled-components';
import { primary } from '../utilities/fonts';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  color: #666;
  margin: 0;
  border: none;
  height: 34px;
  font-family: ${primary};
  font-size: 16px;
`;

const Select = memo(({ getCurrency, currency, currencyArray }) => (
  <StyledSelect defaultValue={currency} onChange={getCurrency}>
    {currencyArray.map((currency) => (
      <option key={currency} value={currency}>
        {currency.toUpperCase()}
      </option>
    ))}
  </StyledSelect>
));

Select.propTypes = {
  getCurrency: PropTypes.func,
  currency: PropTypes.string,
  currencyArray: PropTypes.array,
};

export default Select;
