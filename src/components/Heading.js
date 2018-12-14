import React from 'react';
import styled from 'styled-components';
import { serif, sansSerif } from '../utilities/fonts';

const Title = styled.h1`
  margin-top: 0;
  font-size: 50px;
  font-family: ${serif};
  font-weight: 800;
  span {
    margin-left: 40px;
  }
`;
const SubTitle = styled.h3`
  margin-top: 100px;
  margin-left: 40px;
  font-size: 20px;
  font-family: ${sansSerif};
  text-transform: uppercase;
  font-weight: 400;
  color: #303030;
`;

const Heading = () => (
  <header>
    <Title>
      Currency <br />
      <span>Converter</span>
    </Title>
    <SubTitle>Convert smth to smth</SubTitle>
  </header>
);

export default Heading;
