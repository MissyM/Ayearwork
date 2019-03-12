
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { logNavego } from './services/log'

class AppContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   const session = {
  //     userName: '',
  //   grade: '',
  //   gender: '',
  //   password:'',
  //   age: '',
  //   avatar: '',
  //   LearningStyle:'ESTILO ACTIVO',
  //   Intelligence:'cinetico-corporal'
  //   }
  //   this.setSession = (state) => {

  //   }
  // }
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
      // <SessionCtx.Provider value={[session, setSession]}>
      <>{this.props.children}</>
      // </SessionCtx.Provider>

    )
  }
}
export default withRouter(AppContainer)