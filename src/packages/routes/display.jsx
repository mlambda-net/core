import { Routes } from '@mlambda-net/core/routes/routeprovider';

import * as React from 'react';


const Display = () => {

  const { actual, routes } = Routes()
  let Component = () => <div />
  const filter = routes.filter((route) => {
    if (route.name === actual) {
      return route
    }
  })
  if (filter.length > 0) {
    Component = filter[0].component
  }
  return <Component />

}

export {Display}