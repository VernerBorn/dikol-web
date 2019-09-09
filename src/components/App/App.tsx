/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '../pages/Home/Home'
import { Link } from 'react-router-dom'
const Client: React.FC = (): JSX.Element => <Link to="/">Назад</Link>

const App: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/client/:id" component={Client} />
    </Switch>
  )
}

export default App
