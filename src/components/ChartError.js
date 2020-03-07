import React from 'react';
import { StyledMain } from '../elements/Main';
import Aside from '../elements/Aside';
import { Container } from '../elements/Container';

const ChartError = () => {
  return (
    <Container>
      <Aside currency='chart' />
      <StyledMain>
        There was an error loading data. Try to{' '}
        <a
          style={{ color: '#82ca9d', cursor: 'pointer' }}
          onClick={() => window.location.reload()}
        >
          refresh this page
        </a>
      </StyledMain>
    </Container>
  );
};

export default ChartError;
