import React from 'react';
import styled from 'styled-components';

const Title = styled.h1``;
const SubTitle = styled.h3``;

const Heading = () => (
  <header>
    <Title>Currency Converter</Title>
    <SubTitle>Convert smth to smth</SubTitle>
  </header>
);

export default Heading;
