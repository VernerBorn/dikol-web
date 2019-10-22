import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '../../pages/Home/Home'
import BottomBar from '../UI/BottomBar'
import Client from '../../pages/Client/Client'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/client/:id" component={Client} />
      </Switch>
      <BottomBar />
    </div>
  )
}

export default App
