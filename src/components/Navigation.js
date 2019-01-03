import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 50px;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 20px;
  font-size: 13px;
`;

const Navigation = () => (
  <Nav>
    <Ul>
      <Li>Show Current Rates</Li>
      <Li>Show Rates from last 7 days</Li>
    </Ul>
  </Nav>
);

export default Navigation;
