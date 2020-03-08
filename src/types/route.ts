import { RouteComponentProps } from 'react-router-dom'

export interface RouteInterface {
  path: string
  component: any
  routes?: RouteInterface[]
  exact?: boolean
  // strict?: boolean
  title?: string
  name?: string
  auth?: boolean
}

export interface RoutesInterface {
  routes?: RouteInterface[]
}

export type routeProps = RouteComponentProps<any> & RoutesInterface
