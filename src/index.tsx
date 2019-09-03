import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import App from './components/App/App'

ReactDOM.render(
  <ErrorBoundry>
    <Router>
      <App />
    </Router>
  </ErrorBoundry>,
  document.getElementById('root'),
)
