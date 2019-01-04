import React from 'react';
import Currency from '../utilities/Currency';

const currencies = ['usd', 'eur', 'czk'];

const RatesTable = () => (
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

export default RatesTable;
