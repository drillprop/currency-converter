import React from 'react';
import { SubTitle } from './Heading';
import { Spring } from 'react-spring';

const SubTitleForeign = ({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {style => (
      <SubTitle style={style}>Convert {currency.toUpperCase()} to PLN</SubTitle>
    )}
  </Spring>
);

export default SubTitleForeign;
