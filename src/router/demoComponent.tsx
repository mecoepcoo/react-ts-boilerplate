import React from 'react'
import { Switch } from 'react-router-dom'
import { routeProps } from '@/types/route'
import { RouteWithSubRoutes } from './RouteWithSubRoutes'

export const RouteDemoA = (routeProps: routeProps) => {
  const { routes } = routeProps
  console.log(routeProps)
  return routes ? (
    <div>
      <h1>A</h1>
      <Switch>
        {routes.map((route: any, i: number) => {
          return RouteWithSubRoutes(route, i)
        })}
      </Switch>
    </div>
  ) : null
}

export const RouteDemoB = (props: routeProps) => {
  return <h1>B</h1>
}
