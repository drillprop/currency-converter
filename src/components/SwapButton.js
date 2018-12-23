import React from 'react';
import styled from 'styled-components';
import { sansSerif } from '../utilities/fonts';

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

const SwapButton = () => <Button>Swap</Button>;

export default SwapButton;
