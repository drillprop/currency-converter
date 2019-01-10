import React, { Component } from 'react';
import { getPastDates, getTodayDate } from '../utilities/helpers';
import { AreaChart, Area, YAxis, XAxis, CartesianGrid } from 'recharts';
import Loading from '../elements/Loading';

const CustomizedAxisTick = ({ payload, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={60}
        y={0}
        dy={7}
        textAnchor='end'
        transform='rotate(35)'
        fontSize={10}>
        {payload.value}
      </text>
      ;
    </g>
  );
};

class Charts extends Component {
  _isMounted = false;
  state = { dates: [], error: false, currency: 'usd' };

  componentDidMount = () => {
    this._isMounted = true;
    this.fetchRates();
  };
  componentWillUnmount = () => {
    this._isMounted = false;
    clearTimeout(this.timeOut);
  };

  timeOut = arg => {
    setTimeout(() => arg.abort(), 10000);
  };

  fetchRates = () => {
    const { currency } = this.state;
    const startDate = getPastDates(350);
    const endDate = getTodayDate();
    const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${startDate}/${endDate}/`;
    const controller = new AbortController();
    const signal = controller.signal;
    // if pending takes 10 seconds, abort fetching
    if (this._isMounted) {
      this.timeOut(controller);
    }
    fetch(url, { signal })
      .then(data => data.json())
      .then(json => {
        if (this._isMounted) {
          this.setState({ dates: json.rates });
        }
      })
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
        <div style={{ position: 'relative', left: -22 }}>
          <AreaChart
            width={450}
            height={300}
            data={dates}
            margin={{ left: -35, top: 20, bottom: 50, right: 20 }}>
            <Area
              type='monotone'
              dataKey='mid'
              stroke='#82ca9d'
              fill='#82ca9d'
              fillOpacity={0.4}
            />
            <YAxis
              dataKey='mid'
              type='number'
              domain={[3, 5]}
              tick={{ fontSize: 10 }}
              allowDataOverflow={true}
            />
            <CartesianGrid stroke='#eee' />
            <XAxis
              interval={30}
              type='category'
              dataKey='effectiveDate'
              tick={<CustomizedAxisTick />}
            />
          </AreaChart>
        </div>
      );
    }
  }
}

export default Charts;
