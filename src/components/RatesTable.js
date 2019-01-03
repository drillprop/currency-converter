import React, { Component } from 'react';
import Currency from './Currency';

const currencies = ['usd', 'eur', 'czk'];

class RatesTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          {currencies.map(currency => (
            <Currency key={currency} amount={1} currency={currency}>
              {rate => (
                <tr>
                  <td>{currency}</td>
                  <td>{rate}</td>
                </tr>
              )}
            </Currency>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RatesTable;
