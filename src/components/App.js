import React, { Component } from 'react';
import styled from 'styled-components';
import Main from './Main';
import GlobalStyle from '../utilities/GlobalStyle';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Main />
      </Container>
    );
  }
}
export default App;
