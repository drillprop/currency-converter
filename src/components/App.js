import React, { Component } from 'react';
import GlobalStyle from '../utilities/GlobalStyle';
import Navigation from './Navigation';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <HashRouter>
          <Navigation />
        </HashRouter>
      </>
    );
  }
}
export default App;
