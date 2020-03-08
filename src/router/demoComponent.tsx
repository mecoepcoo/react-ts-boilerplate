/* 这个demo用于演示子路由，可以删除 */
import React from 'react'
import { routeProps } from '@/types/route'
import { RenderRoutes } from '@/router/RenderRoutes'

export const RouteDemoA = (routeProps: routeProps) => {
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

export const RouteDemoB = (props: routeProps) => {
  return <h1>B</h1>
}
