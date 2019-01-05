import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import Loading from '../elements/Loading';
// import RatesContainer from './RatesContainer';

const RatesContainer = lazy(() => import('./RatesContainer'));

const Nav = styled.nav`
  color: #444;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
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
  <>
    <Suspense fallback={<Loading />}>
      <Nav>
        <Ul>
          <Li>
            <Link to='/rates'>Current exchange Rates</Link>
          </Li>
          <Li>
            <a href=''>Rates from last 7 days</a>
          </Li>
        </Ul>
      </Nav>
      <>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route
            path='/rates'
            component={props => <RatesContainer {...props} />}
          />
        </Switch>
      </>
    </Suspense>
  </>
);

export default Navigation;
