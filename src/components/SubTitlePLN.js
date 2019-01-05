import React from 'react';
import { Spring } from 'react-spring';
import { SubTitle } from '../elements/Titles';
import PropTypes from 'prop-types';

const SubTitlePLN = ({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {style => (
      <SubTitle style={style}>Convert PLN to {currency.toUpperCase()}</SubTitle>
    )}
  </Spring>
);

SubTitlePLN.propTypes = {
  currency: PropTypes.string
};
export default SubTitlePLN;
