import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
  display: none;
  cursor: pointer;
  margin-top: 20px;
  right: 40px;
  position: absolute;
  z-index: 5;
  @media (max-width: 800px) {
    display: block;
  }
`;

const HamburgerInvisibleCheckbox = styled.input`
  cursor: pointer;
  z-index: 10;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 31px;
  position: absolute;
  opacity: 0;
  :checked ~ div:first-of-type {
    transform: rotate(45deg);
  }
  :checked ~ div:nth-of-type(2) {
    transform: scaleX(0);
  }
  :checked ~ div:last-of-type {
    transform: rotate(-45deg);
  }
`;

const HamburgerBar = styled.div`
  width: 30px;
  height: 5px;
  background-color: black;
  margin-bottom: 6px;
  transform-origin: left;
  transition: 300ms;
`;

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

const Navigation = () => {
  return (
    <>
      <HamburgerContainer>
        <HamburgerInvisibleCheckbox type='checkbox' />
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerContainer>
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
    </>
  );
};

export default Navigation;
