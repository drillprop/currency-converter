import React, { Component } from 'react';
import GlobalStyle from '../utilities/GlobalStyle';
import Navigation from './Navigation';
import { HashRouter } from 'react-router-dom';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <HashRouter>
          <>
            <Navigation />
            <Router />
          </>
        </HashRouter>
      </>
    );
  }
}
export default App;
