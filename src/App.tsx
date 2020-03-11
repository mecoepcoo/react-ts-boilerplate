import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { routes } from '@/router/router'
import { RenderRoutes } from '@/router/RenderRoutes'
import ScrollToTop from '@/components/Base/ScrollToTop'
import '@/App.less'

// 是否具有权限，从状态管理或context中获取
const authed = false
const authPath = '/login'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {RenderRoutes(routes, authed, authPath)}
    </Router>
  )
}

export default App
