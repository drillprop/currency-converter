import React, { memo } from 'react';
import styled from 'styled-components';
import Img from '../elements/Img';
const StyledAside = styled.aside``;
import { Spring } from 'react-spring';

const Aside = memo(({ currency }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {props => (
      <StyledAside style={props}>
        <Img currency={currency} />
      </StyledAside>
    )}
  </Spring>
));

export default Aside;
