import React from 'react';
import Charts from './Charts';
import { Container } from '../elements/Container';
import Aside from './Aside';

const ChartContainer = () => (
  <Container>
    <Aside />
    <Charts />
  </Container>
);

export default ChartContainer;
