import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const StyledMain = styled.main`
  margin: 0 auto;
  margin-top: 8rem;
  width: 400px;
`;

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
