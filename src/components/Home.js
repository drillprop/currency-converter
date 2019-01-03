import React from 'react';
import styled from 'styled-components';
import Main from './Main';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.5fr;
`;

const Home = () => (
  <Container>
    <Main />
  </Container>
);

export default Home;
