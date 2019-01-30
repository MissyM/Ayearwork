import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { log } from './services/log'

class AppContainer extends Component {

  componentWillMount() {
    log({
      eventName: 'Navigated',
      url: this.props.history.location.pathname,
    })
    this.unlisten = this.props.history.listen(location => {
      log({
        eventName: 'Navigated',
        url: location.pathname,
      })
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
