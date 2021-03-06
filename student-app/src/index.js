import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './model'

import { AppContainer } from 'react-hot-loader'
//import Profile from './Dashboard/components/Profile'
//import Register from './Register/Index'

import './services/session'
import './index.css'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
  , document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
render()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}