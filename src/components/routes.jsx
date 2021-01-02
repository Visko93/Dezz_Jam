import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Favorite from './pages/Favorites'

const Routes = ({ dark }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home dark={dark} />
      </Route>
      <Route path="/favorites">
        <Favorite dark={dark} />
      </Route>
    </Switch>
  )
}

export default Routes
