import React, { memo } from 'react';
import styled from 'styled-components';
import Img from '../elements/Img';
const StyledAside = styled.aside``;
import { Spring } from 'react-spring';
import PropTypes from 'prop-types';

const Aside = memo(({ currency }) => {
  console.log(currency);
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <StyledAside style={props}>
          <Img currency={currency} />
        </StyledAside>
      )}
    </Spring>
  );
});

Aside.propTypes = {
  currency: PropTypes.string
};
export default Aside;
