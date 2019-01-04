import React from 'react';
import SubTitlePLN from './SubTitlePLN';
import SubTitleForeign from './SubTitleForeign';
import { Title } from '../elements/Titles';

const HomeHeading = ({ currency, pln }) => (
  <header>
    <Title>
      Currency <br />
      <span>Converter</span>
    </Title>
    {pln ? (
      <SubTitlePLN currency={currency} />
    ) : (
      <SubTitleForeign currency={currency} />
    )}
  </header>
);

export default HomeHeading;
