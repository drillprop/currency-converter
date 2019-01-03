import React, { Component } from 'react';

class RatesTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>USD</td>
            <td>3.72</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>4.12</td>
          </tr>
          <tr>
            <td>CZK</td>
            <td>2.32</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RatesTable;
