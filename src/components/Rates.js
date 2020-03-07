import React from 'react';
import Aside from '../elements/Aside';
import { Container } from '../elements/Container';
import { StyledMain } from '../elements/Main';
import { SubTitle, Title } from '../elements/Titles';
import RatesTable from './RatesTable';

const Rates = () => (
  <Container>
    <Aside currency={'chart'} />
    <StyledMain>
      <Title>Current Exchange Rates</Title>
      <SubTitle>Based on NBP API</SubTitle>
      <RatesTable />
    </StyledMain>
  </Container>
);

export default Rates;
