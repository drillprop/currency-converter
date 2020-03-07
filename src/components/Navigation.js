import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  color: #444;
  position: absolute;
  width: calc(100vw / 3 * 2);
  top: 0;
  right: 0;
  text-transform: uppercase;
  background: #f1f1f1;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Li = styled.li`
  list-style: none;
  font-size: 12px;
  margin-top: 10px;
  a {
    text-decoration: none;
    color: #444;
  }
`;

const Navigation = () => (
  <Nav>
    <Ul>
      <Li>
        <Link to='/'>Curency Converter</Link>
      </Li>
      <Li>
        <Link to='/rates'>Today's Exchange Rates</Link>
      </Li>
      <Li>
        <Link to='/charts'>Exchange Rates Chart</Link>
      </Li>
    </Ul>
  </Nav>
);

export default Navigation;
