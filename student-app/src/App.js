import React, { Component } from 'react'
import { UIRouter, UIView, hashLocationPlugin } from '@uirouter/react'

import './App.css'

import { VideoPage, Login, ChooseChips } from './pages'

const states = [
  {
    name: 'choosechips',
    url: 'choosechips',
    component: ChooseChips,
  },
  {
    name: 'login',
    url: 'login',
    component: Login,
  },
  {
    name: 'video',
    url: 'video',
    component: VideoPage,
  },
]

const config = router => router.urlService.rules.initial({ state: 'video' });

const plugins = [hashLocationPlugin]

class App extends Component {
  render() {
    return (
      <UIRouter plugins={plugins} states={states} config={ config}>
        <UIView
          
          
        />
      </UIRouter>
    )
  }
}

export default App
