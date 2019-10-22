import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch(): void {
    this.setState({ hasError: true })
  }

  render(): JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      return <div>Error!</div>
    }
    return this.props.children
  }
}
