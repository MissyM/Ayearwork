
import React, { useEffect, useState  } from 'react'
import { withRouter } from 'react-router-dom'
import { logNavego } from './services/log'
import SessionCtx from './sessionContext'

const AppWrap = (props) => {

  const [session, setSession] = useState(() => ({
    username: "",
  }))

  useEffect(() => {
    logNavego(props.history.location.pathname + props.history.location.search )
    const unlisten = props.history.listen(location => {
      logNavego(location.pathname + location.search)
    });
    return () => {
       unlisten();
    }
  }, [])
    return (
      <SessionCtx.Provider value={[session, setSession]}>
        {this.props.children}
      </SessionCtx.Provider>
    )
}
export default withRouter(AppWrap)