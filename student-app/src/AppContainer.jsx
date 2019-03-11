import React, { useState, useEffect } from 'react'
import { logNavego } from './services/log'
import useReactRouter from 'use-react-router'
import SessionCtx from './sessionContext'

function AppContainer(props) {
  const { history, location, search, pathname } = useReactRouter()
  const [session, setSession] = useState({
    userName: '',
    grade: '',
    gender: '',
    password: '',
    age: '',
    avatar: '',
    LearningStyle: '',
    Intelligence: ''
  })
 
  useEffect(() => {
    logNavego(location + search )
    const unlisten = history.listen(()=> {
      logNavego(pathname + search)
    })
    return () => {
      unlisten()
    }
  })
  
  return (
    <SessionCtx.Provider value={[session, setSession]}>
      <>{props.children }</>
    </SessionCtx.Provider>
  )
}

export default AppContainer
