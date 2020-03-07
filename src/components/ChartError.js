import React from 'react';
import Layout from '../elements/Layout';

const ChartError = () => {
  return (
    <Layout currency='chart'>
      There was an error loading data. Try to{' '}
      <a
        style={{ color: '#82ca9d', cursor: 'pointer' }}
        onClick={() => window.location.reload()}
      >
        refresh this page
      </a>
    </Layout>
  );
};

export default ChartError;
