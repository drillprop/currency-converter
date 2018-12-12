import React from 'react';
import styled from 'styled-components';
import Img from './Img';
const StyledAside = styled.aside``;

const Aside = ({ currency }) => (
  <StyledAside>
    <Img currency={currency} />
  </StyledAside>
);

export default Aside;
