/* 这个demo用于演示子路由，可以删除 */
import React from 'react'
import { RouteProps } from '@/types/route'
import { RenderRoutes } from '@/router/RenderRoutes'

export const RouteDemoA = (routeProps: RouteProps) => {
  const { routes } = routeProps
  console.log(routeProps)
  const authed = false
  return routes ? (
    <div>
      <h1>A</h1>
      {RenderRoutes(routes, authed)}
    </div>
  ) : null
}

export const RouteDemoB = (props: RouteProps) => {
  return <h1>B</h1>
}
