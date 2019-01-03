import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  color: #444;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 50px;
  text-transform: uppercase;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  margin-left: 20px;
  font-size: 13px;
  a {
    text-decoration: none;
    color: #444;
  }
`;

const Navigation = () => (
  <Nav>
    <Ul>
      <Li>
        <a href=''>Current exchange Rates</a>
      </Li>
      <Li>
        <a href=''>Rates from last 7 days</a>
      </Li>
    </Ul>
  </Nav>
);

export default Navigation;
