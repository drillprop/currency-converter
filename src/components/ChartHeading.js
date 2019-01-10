import React from 'react';
import { Title, SubTitle } from '../elements/Titles';

const ChartHeading = ({ children }) => (
  <>
    <Title>Currency Exchange Rates Chart</Title>
    <SubTitle>{children} to PLN (last 360 days)</SubTitle>
  </>
);

export default ChartHeading;
