import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../elements/Loading';
import Home from './Home';
import Rates from './Rates';

const Charts = lazy(() => import('./Charts'));

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/rates' component={(props) => <Rates {...props} />} />
      <Suspense fallback={<Loading />}>
        <Route path='/charts' component={(props) => <Charts {...props} />} />
      </Suspense>
    </Switch>
  );
};

export default Router;
