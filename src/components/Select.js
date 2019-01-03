import React, { Component } from 'react';
import styled from 'styled-components';
import { sansSerif } from '../utilities/fonts';

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

class Select extends Component {
  render() {
    const { getCurrency, currency } = this.props;
    return (
      <StyledSelect defaultValue={currency} onChange={getCurrency}>
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
        <option value='czk'>CZK</option>
      </StyledSelect>
    );
  }
}

export default Select;
