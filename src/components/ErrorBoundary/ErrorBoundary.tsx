import React, { Component } from 'react'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch(): void {
    this.setState({ hasError: true })
  }

  render(): JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return this.props.children
  }
}
