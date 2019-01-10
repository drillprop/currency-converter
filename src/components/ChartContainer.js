import React from 'react';
import Charts from './Charts';
import { Container } from '../elements/Container';
import Aside from '../elements/Aside';
import { StyledMain } from '../elements/Main';

const ChartContainer = () => (
  <Container>
    <Aside currency='chart' />
    <StyledMain>
      <Charts />
    </StyledMain>
  </Container>
);

export default ChartContainer;
