import { Routes } from '@mlambda-net/core/routes/routeprovider';

import * as React from 'react';

const Display = ({ name }) => {
  const routes = Routes();

  const r = routes.maps.filter((route) => route.name === name);

  if (r.length > 0) {
    const global = r[0];

    let Component = () => <div />;
    const filter = global.routes.filter((route) => {
      if (route.name === global.actual) {
        return route;
      }
    });
    if (filter.length > 0) {
      Component = filter[0].component;
    }
    return <Component />;
  } else {
    return <span />;
  }
};

export { Display };
