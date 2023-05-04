import * as React from 'react';
import { dispatcher } from './routeprovider';

function withRoute(Component) {
  const routing = () => {
    return {
      to(route) {
        dispatcher({ type: 'to', payload: { name: 'global', to: route } });
      },
    };
  };

  return (props) => <Component route={routing()} {...props} />;
}

export { withRoute };
