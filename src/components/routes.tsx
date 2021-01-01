import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import getTrendingList from '../api/getMusic'
import Favorite from './pages/Favorites'

import Home from './pages/Home'

/**
 * Types
 */
/***************** */
function Routes() {
  const [trendMusic, setTrendMusic] = React.useState([])
  React.useEffect(() => {
    getTrendingList()
      .then((res) => setTrendMusic(res))
      .catch((e) => {
        console.log('Dados não chegaram no routes')
      })
  }, [])

  console.log(trendMusic)

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
