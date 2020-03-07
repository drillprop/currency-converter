import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container';
import Aside from './Aside';
import { StyledMain } from './Main';

const Layout = ({ currency, children }) => {
  return (
    <Container>
      <Aside currency={currency} />
      <StyledMain>{children}</StyledMain>
    </Container>
  );
};

Layout.propTypes = {
  currency: PropTypes.string
};

export default Layout;
