import React from 'react';
import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';

const Title = styled.h1`
  margin-top: 0;
  font-size: 65px;
  font-family: ${serif};
  font-weight: 700;
`;
const SubTitle = styled.h3`
  margin-top: 0;
  font-size: 25px;
  font-family: ${sansSerif};
  text-transform: uppercase;
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
