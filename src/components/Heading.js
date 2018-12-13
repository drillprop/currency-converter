import React from 'react';
import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';

const Title = styled.h1`
  font-size: 40px;
  font-family: ${serif};
  font-weight: 700;
`;
const SubTitle = styled.h3`
  font-size: 16px;
  font-family: ${sansSerif};
  font-weight: 400;
  color: #303030;
`;

const Heading = () => (
  <header>
    <Title>Currency Converter</Title>
    <SubTitle>Convert smth to smth</SubTitle>
  </header>
);

export default Heading;
