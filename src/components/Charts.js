import React, { Component } from 'react';
import { getPastDates, getTodayDate } from '../utilities/helpers';
import { AreaChart, Area, YAxis, XAxis, CartesianGrid } from 'recharts';
import Loading from '../elements/Loading';

const CustomizedAxisTick = ({ payload, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={10} y={0} dy={16} textAnchor='end' transform='rotate(-35)'>
        {payload.value}
      </text>
      ;
    </g>
  );
};

class Charts extends Component {
  state = { dates: [], error: false };

  componentDidMount = () => {
    const currency = 'eur';
    const startDate = getPastDates(350);
    const endDate = getTodayDate();
    const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${startDate}/${endDate}/`;
    const controller = new AbortController();
    const signal = controller.signal;
    // if pending takes 10 seconds, abort fetching
    setTimeout(() => controller.abort(), 10000);
    fetch(url, { signal })
      .then(data => data.json())
      .then(json => this.setState({ dates: json.rates }))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { dates, error } = this.state;
    if (error) {
      return (
        <div>
          There was an error loading data. Try to{' '}
          <a
            style={{ color: '#82ca9d', cursor: 'pointer' }}
            onClick={() => window.location.reload()}>
            refresh this page
          </a>
        </div>
      );
    } else if (!dates.length) {
      return <Loading />;
    } else {
      return (
        <>
          <AreaChart
            width={500}
            height={500}
            data={dates}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <Area
              type='monotone'
              dataKey='mid'
              stroke='#82ca9d'
              fill='#82ca9d'
              fillOpacity={0.4}
            />
            <YAxis dataKey='mid' type='number' domain={[3, 5]} />
            <CartesianGrid stroke='#eee' />
            <XAxis
              interval={30}
              type='category'
              dataKey='effectiveDate'
              tick={<CustomizedAxisTick />}
            />
          </AreaChart>
        </>
      );
    }
  }
}

export default Charts;
