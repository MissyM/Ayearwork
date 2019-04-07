
import React, { useEffect, useState  } from 'react'
import { withRouter } from 'react-router-dom'
import { logNavego } from './services/log'
import { sessionInfo, createSession, removeSession as _removeSession } from './services/session'
import SessionCtx from './sessionContext'

const AppWrap = (props) => {

  const [session, _setSession] = useState(sessionInfo)

  const setSession = info => {
    _setSession(info)
    createSession(info)
  }

  const removeSession = () => {
    _setSession(undefined)
    _removeSession()
  }

  useEffect(() => {
    logNavego(props.history.location.pathname + props.history.location.search )
    const unlisten = props.history.listen(location => {
      logNavego(location.pathname + location.search)
    });
    return () => {
      unlisten()
    }
  }, [])
    return (
      <SessionCtx.Provider value={{session, setSession, removeSession}}>
        {props.children}
      </SessionCtx.Provider>
    )
}
export default withRouter(AppWrap)