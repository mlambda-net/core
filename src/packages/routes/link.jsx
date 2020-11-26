import * as React from 'react'
import { Router } from './routeprovider'




function withRoute (Component) {

  const routing = () => {
    const router = Router()

      return {
        to(route) {
          router({ type: 'to', payload: route })
        }

    }
  }

  return () => <Component route={routing()} />
}

export {withRoute}