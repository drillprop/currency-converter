import React, { memo } from 'react';
import styled from 'styled-components';
import { sansSerif } from '../utilities/fonts';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  color: #666;
  margin: 0;
  border: none;
  height: 34px;
  font-family: ${sansSerif};
  font-size: 16px;
  option {
    text-transform: uppercase;
  }
`;

const Select = memo(({ getCurrency, currency }) => (
  <StyledSelect defaultValue={currency} onChange={getCurrency}>
    <option value='usd'>USD</option>
    <option value='eur'>EUR</option>
    <option value='czk'>CZK</option>
  </StyledSelect>
));

Select.propTypes = {
  getCurrency: PropTypes.func,
  currency: PropTypes.string
};

export default Select;
