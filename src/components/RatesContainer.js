import React from 'react';
import RatesTable from './RatesTable';
import Aside from './Aside';
import { Container } from '../elements/Container';
import { StyledMain } from '../elements/Main';

const RatesContainer = () => (
  <>
    <Container>
      <Aside />
      <StyledMain>
        <RatesTable />
      </StyledMain>
    </Container>
  </>
);

export default RatesContainer;
