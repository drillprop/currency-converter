import React from 'react';
import { Spring } from 'react-spring';
import { SubTitle } from '../elements/Titles';
import PropTypes from 'prop-types';

const SubTitleForeign = ({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {style => (
      <SubTitle style={style}>Convert {currency.toUpperCase()} to PLN</SubTitle>
    )}
  </Spring>
);
SubTitleForeign.propTypes = {
  currency: PropTypes.string
};

export default SubTitleForeign;
