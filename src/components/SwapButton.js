import React, { memo } from 'react';
import styled from 'styled-components';
import { sansSerif } from '../utilities/fonts';
import PropTypes from 'prop-types';

const Button = styled.button`
  align-self: center;
  display: block;
  font-family: ${sansSerif};
  margin-top: 30px;
  background: #444;
  text-transform: uppercase;
  border: none;
  padding: 10px 20px;
  color: white;
`;

const SwapButton = memo(({ swapCurrency }) => (
  <Button onClick={swapCurrency}>Swap</Button>
));

SwapButton.propTypes = {
  swapCurrency: PropTypes.func
};

export default SwapButton;
