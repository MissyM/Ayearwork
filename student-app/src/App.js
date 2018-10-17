import React, { Component } from 'react';
import { UIRouter, UIView, hashLocationPlugin } from '@uirouter/react';
import logo from './logo.svg';
import './App.css';

import Video from './pages/Video.jsx'

const states = [
  {
    name: 'video',
    url: '',
    component: Video,
  },
];

const plugins = [hashLocationPlugin];

class App extends Component {
  render() {
    return (
      <UIRouter plugins={plugins} states={states}>
        <UIView />
      </UIRouter>
    );
  }
}

export default App;
