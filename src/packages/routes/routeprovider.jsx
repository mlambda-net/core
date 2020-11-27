import * as React from 'react';

const RContext = React.createContext();

let dispatcher = {};
let route_list = [];

function routeReducer(state, action) {
  switch (action.type) {
    case 'to': {
      return {
        ...state,
        maps: state.maps.map((c) =>
          c.name === action.payload.name
            ? { ...c, actual: action.payload.to }
            : c
        ),
      };
    }
  }
}

function RouteProvider({ children, routes }) {
  route_list = routes.map((r) => {
    return {
      name: r.name,
      routes: r.routes,
    };
  });

  const [state, dispatch] = React.useReducer(routeReducer, { maps: routes });
  dispatcher = dispatch;
  return <RContext.Provider value={state}>{children}</RContext.Provider>;
}

function Routes() {
  const context = React.useContext(RContext);
  if (context === undefined) {
    throw new Error('RouteContext must be used within a RouteProvider');
  }
  return context;
}

function AddRoutes(route) {
  route_list.push(route);
}

export { RouteProvider, AddRoutes, dispatcher, Routes };
