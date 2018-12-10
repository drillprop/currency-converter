import React, { Fragment } from 'react';
import Currency from './Currency';

const App = () => (
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

export default App;
