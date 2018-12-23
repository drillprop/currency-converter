import React from 'react';
import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';

const Button = styled.button`
  display: block;
  font-family: ${sansSerif};
  margin-top: 20px;
  background: #444;
  border: none;
  padding: 10px 20px;
  color: white;
`;

const SwapButton = () => <Button>Swap</Button>;

export default SwapButton;
