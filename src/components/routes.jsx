import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Favorite from './pages/Favorites'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/favorites">
        <Favorite />
      </Route>
    </Switch>
  )
}

export default Routes
