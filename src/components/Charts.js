import React, { Component } from 'react';
import { getPastDates, getTodayDate } from '../utilities/helpers';

class Charts extends Component {
  state = { dates: [] };
  componentDidMount = () => {
    const currency = 'usd';
    const startDate = getPastDates(100);
    const endDate = getTodayDate();
    const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${startDate}/${endDate}/`;
    fetch(url)
      .then(data => data.json())
      .then(json => this.setState({ dates: json.rates.reverse() }));
  };

  render() {
    const { dates } = this.state;
    return <div>hello</div>;
  }
}

export default Charts;
