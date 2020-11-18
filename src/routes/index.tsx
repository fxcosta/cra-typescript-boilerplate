import React from 'react';

import { Switch } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import { routesList } from './routes';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      {routesList.map((route, i) => (
        <RouteWrapper key={route} {...route} />
      ))}
    </Switch>
  );
}
