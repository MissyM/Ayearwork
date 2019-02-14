import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { logNavego } from './services/log'

class AppContainer extends Component {
  componentDidMount() {
    logNavego(this.props.history.location.pathname + this.props.history.location.search )
    this.unlisten = this.props.history.listen(location => {
      logNavego(location.pathname + location.search)
    })
  }
  componentWillUnmount() {
    this.unlisten()
  }
  render() {
    return (
      <>{this.props.children}</>
    )
  }
}

export default withRouter(AppContainer)
