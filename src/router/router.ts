import loadable from '@loadable/component'
import { RouteInterface } from '@/types/route'

import { RouteDemoA, RouteDemoB } from './demoComponent'

// TODO: public路径从buildConfig里读取，注入环境变量使用
export const basename = ''

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/demo/HelloWorldDemo/HelloWorldDemoPage')),
    name: 'home',
    title: 'react-home',
  },
  {
    path: '/home',
    component: loadable(() => import('@/pages/demo/HelloWorldDemo/HelloWorldDemoPage')),
    exact: true,
    name: 'home',
    title: 'HelloWorld',
    auth: true,
  },
  {
    path: '/a',
    component: RouteDemoA,
    name: 'demoA',
    title: 'DemoA',
    routes: [
      {
        path: '/a/b',
        component: RouteDemoB,
        exact: true,
        name: 'demoB',
        title: 'DemoB',
        auth: true,
      },
    ],
  },
  // 404 Not Found
  {
    path: '*',
    component: loadable(() => import('@/pages/status/404')),
    name: '404',
    title: '404',
  },
]
