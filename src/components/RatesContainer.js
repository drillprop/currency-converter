import React from 'react';
import RatesTable from './RatesTable';
import Aside from './Aside';
import { Container } from '../elements/Container';
import { StyledMain } from '../elements/Main';
import RatesHeading from './RatesHeading';

const RatesContainer = () => (
  <>
    <Container>
      <Aside />
      <StyledMain>
        <RatesHeading />
        <RatesTable />
      </StyledMain>
    </Container>
  </>
);

export default RatesContainer;
