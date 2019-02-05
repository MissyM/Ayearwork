import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { logNavego } from './services/log'

class AppContainer extends Component {

  componentWillMount() {
    logNavego(this.props.history.location.pathname)
    this.unlisten = this.props.history.listen(location => {
      logNavego(location.pathname)
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
