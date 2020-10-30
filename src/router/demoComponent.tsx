/* 这个demo用于演示子路由，可以删除 */
import React from 'react'
import { routeProps } from '@/types/route'
import { RenderRoutes } from '@/router/RenderRoutes'

export const RouteDemoA = (routeProps: routeProps) => {
  // const list: number[] = [1, 2];
  const list: Array<number> = [1, 2, 3] // Array<number> 泛型语法

  let value: unknown // 3.0 版本出来的

  let tupleType = [String, Boolean] // Tuple 元祖类型

  // 声明函数返回值为void

  // 类型守护

  const { routes } = routeProps
  console.log(routeProps)
  const authed: boolean = false
  return routes ? (
    <div>
      <h1>A</h1>
      {list.map((item, index) => {
        return <h2 key={index}>{item}</h2>
      })}
      {RenderRoutes(routes, authed)}
    </div>
  ) : null
}

export const RouteDemoB = (props: routeProps) => {
  return <h1>B</h1>
}
