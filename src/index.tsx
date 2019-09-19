import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import App from './components/App/App'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import './index.scss'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById('root'),
)
