import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../elements/Loading';
import Home from './Home';

const Charts = lazy(() => import('./Charts'));
const Rates = lazy(() => import('./Rates'));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rates' component={props => <Rates {...props} />} />
        <Route path='/charts' component={props => <Charts {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default Router;
