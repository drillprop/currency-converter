import React, { memo } from 'react';
import SubTitlePLN from './SubTitlePLN';
import SubTitleForeign from './SubTitleForeign';
import { Title } from '../elements/Titles';
import PropTypes from 'prop-types';

const HomeHeading = memo(({ currency, pln }) => (
  <header>
    <Title>Currency Converter</Title>
    {pln ? (
      <SubTitlePLN currency={currency} />
    ) : (
      <SubTitleForeign currency={currency} />
    )}
  </header>
));

HomeHeading.propTypes = {
  currency: PropTypes.string,
  pln: PropTypes.bool
};

export default HomeHeading;
