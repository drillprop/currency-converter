import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import Loading from '../elements/Loading';

const ChartContainer = lazy(() => import('./ChartContainer'));
const RatesContainer = lazy(() => import('./RatesContainer'));

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

const Navigation = withRouter(({ location }) => (
  <>
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
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route
            path='/rates'
            component={props => <RatesContainer {...props} />}
          />
          <Route path='/' component={props => <ChartContainer {...props} />} />
        </Switch>
      </Suspense>
    </>
  </>
));

export default Navigation;
