import React from 'react';
import styled from 'styled-components';
import Img from './Img';
const StyledAside = styled.aside``;
import { Spring } from 'react-spring';

const Aside = ({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {props => (
      <StyledAside style={props}>
        <Img currency={currency} />
      </StyledAside>
    )}
  </Spring>
);

export default Aside;
