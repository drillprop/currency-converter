import React, { Component } from 'react';
import GlobalStyle from '../utilities/GlobalStyle';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
