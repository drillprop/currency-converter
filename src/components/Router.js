import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../elements/Loading';
import Home from './Home';

const ChartContainer = lazy(() => import('./ChartContainer'));
const RatesContainer = lazy(() => import('./RatesContainer'));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/rates'
          component={props => <RatesContainer {...props} />}
        />
        <Route path='/' component={props => <ChartContainer {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default Router;
