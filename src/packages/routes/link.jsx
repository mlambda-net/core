import * as React from 'react';
import { Router } from './routeprovider';

function withRoute(Component) {
  const routing = () => {
    return {
      to(route) {
        const router = Router();
        router({ type: 'to', payload: route });
      },
    };
  };

  return (props) => <Component route={routing()} {...props} />;
}

export { withRoute };
