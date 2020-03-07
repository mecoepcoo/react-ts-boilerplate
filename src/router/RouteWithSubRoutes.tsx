import React from 'react'
import { Route } from 'react-router-dom'
import { RouteInterface } from '@/types/route'

export const RouteWithSubRoutes: React.FC<RouteInterface> = (route: RouteInterface, i: number) => {
  return (
    <Route
      key={i}
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
