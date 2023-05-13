import * as React from 'react';
import { dispatcher } from './routeprovider';

const routing = {
  to(route) {
    dispatcher({ type: 'to', payload: { name: 'global', to: route } });
  },
};

export const WithLink = (Component) => {
  return (props) => <Component route={routing} {...props}></Component>;
};

let Link = (props) => (
  <>{React.cloneElement(props.children, { route: routing, ...props })}</>
);

export default Link;
