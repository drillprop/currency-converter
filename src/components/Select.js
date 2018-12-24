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
`;

class Select extends Component {
  render() {
    const { getCurrency } = this.props;
    return (
      <StyledSelect onChange={getCurrency}>
        <option value='usd'>usd</option>
        <option value='eur'>eur</option>
        <option value='czk'>czk</option>
      </StyledSelect>
    );
  }
}

export default Select;
