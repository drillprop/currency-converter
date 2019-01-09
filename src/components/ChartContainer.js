import React from 'react';
import Charts from './Charts';
import { Container } from '../elements/Container';
import Aside from '../elements/Aside';

const ChartContainer = () => (
  <Container>
    <Aside currency='chart' />
    <Charts />
  </Container>
);

export default ChartContainer;
