import * as React from 'react'


const RContext = React.createContext()

function routeReducer(state, action) {

  switch (action.type) {
    case 'to': {
      return {...state, actual: action.payload}
    }
    case 'add' : {
      let c = {...state}
      c.routes.push(action.payload)
      return c
    }
  }
}

function RouteProvider ({children, routes}) {
  const [state, dispatch] = React.useReducer(routeReducer, routes)
  return <RContext.Provider value={{ state: state, dispatch: dispatch }}> {children} </RContext.Provider>
}

function Router() {
  const context = React.useContext(RContext)
  if (context === undefined) {
    throw new Error('RouteContext must be used within a RouteProvider')
  }
  return context.dispatch
}

function Routes() {
  const context = React.useContext(RContext)
  if (context === undefined) {
    throw new Error('RouteContext must be used within a RouteProvider')
  }
  return context.state
}

export {RouteProvider, Router, Routes}