import React from 'react';
import Layout from '../elements/Layout';
import { SubTitle, Title } from '../elements/Titles';
import RatesTable from './RatesTable';

const Rates = () => (
  <Layout currency='chart'>
    <Title>Current Exchange Rates</Title>
    <SubTitle>Based on NBP API</SubTitle>
    <RatesTable />
  </Layout>
);

export default Rates;
