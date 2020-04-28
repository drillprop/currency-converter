import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
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
  currency: PropTypes.string,
};

export default Layout;
