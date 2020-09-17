import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

import Logo from './react-logo.svg'
import './HelloWorldDemoPage.less'

const HelloWorldDemoPage: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  console.log(routeProps)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Logo className="App-logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Link to="/">主页</Link> ||
          <Link to="/a">a</Link> ||
          <Link to="/a/b">b</Link>
        </div>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          see
        </a> */}
      </header>
    </div>
  )
}

export default HelloWorldDemoPage
