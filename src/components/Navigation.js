import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import Loading from '../elements/Loading';
import PropTypes from 'prop-types';
import ChartContainer from './ChartContainer';

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

const Navigation = withRouter(({ location }) => (
  <>
    <Suspense fallback={<Loading />}>
      <Nav>
        <Ul>
          <Li>
            {location.pathname === '/' ? (
              <Link to='/rates'>Current exchange Rates</Link>
            ) : (
              <Link to='/'>Back to Converter</Link>
            )}
          </Li>
          <Li>
            <Link to='/charts'>Rates from last 7 days</Link>
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
          <Route path='/' component={props => <ChartContainer {...props} />} />
        </Switch>
      </>
    </Suspense>
  </>
));

export default Navigation;
