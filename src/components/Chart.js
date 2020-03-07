import PropTypes from 'prop-types';
import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const CustomizedAxisTick = ({ payload, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={60}
        y={0}
        dy={7}
        textAnchor='end'
        transform='rotate(35)'
        fontSize={10}
      >
        {payload.value}
      </text>
      ;
    </g>
  );
};

const Chart = ({ dates }) => {
  return (
    <div style={{ position: 'relative', left: -22 }}>
      <AreaChart
        width={450}
        height={300}
        data={dates}
        margin={{ left: -35, top: 20, bottom: 50, right: 20 }}
      >
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
};

Chart.propTypes = {
  dates: PropTypes.array
};

export default Chart;
