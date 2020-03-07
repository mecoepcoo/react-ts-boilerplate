import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { routes } from '@/router/router'
import { RouteWithSubRoutes } from '@/router/RouteWithSubRoutes'
import { RouteInterface } from '@/types/route'
import '@/App.less'

const authed = false
const authPath = '/login'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: RouteInterface, i) => {
          return RouteWithSubRoutes(route, i)
        })}
      </Switch>
    </Router>
  )
}

export default App
