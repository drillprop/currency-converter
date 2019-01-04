import React from 'react';
import { Spring } from 'react-spring';
import { SubTitle } from '../elements/Titles';

const SubTitlePLN = ({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {style => (
      <SubTitle style={style}>Convert PLN to {currency.toUpperCase()}</SubTitle>
    )}
  </Spring>
);

export default SubTitlePLN;
