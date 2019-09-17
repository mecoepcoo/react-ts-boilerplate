import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { beforeRouter } from '@/router';

const renderRoutes = (routes: any, authed: boolean, authPath = '/login', extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            document.title = route.title || 'react-app';
            beforeRouter(route);
            if (!route.requireAuth || authed || route.path === authPath) {
              return <route.component {...props} {...extraProps} route={route} />;
            }
            // eslint-disable-next-line
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />;
          }}
        />
      ))}
    </Switch>
  ) : null;

export default renderRoutes;
