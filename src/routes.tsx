//import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import Favorite from './components/pages/Favorites'

import Home from './components/pages/Home'

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/favorite">
        <Favorite />
      </Route>
    </Switch>
  )
}

export default Routes
