import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Blog from './pages/Home'

var createBrowserHistory = require('history').createBrowserHistory
const history = createBrowserHistory()

const Router = () => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default Router
