import React from 'react';
import { Spring } from 'react-spring';
import { SubTitle } from '../elements/Titles';

const SubTitleForeign = ({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {style => (
      <SubTitle style={style}>Convert {currency.toUpperCase()} to PLN</SubTitle>
    )}
  </Spring>
);

export default SubTitleForeign;
