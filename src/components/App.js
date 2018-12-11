import React, { Component } from 'react';
import Currency from './Currency';

class App extends Component {
  render() {
    return (
      <>
        <Currency>
          {(handleChange, value) => (
            <>
              <input type='number' onChange={handleChange} />
              <div>{value}</div>
            </>
          )}
        </Currency>
      </>
    );
  }
}
export default App;
