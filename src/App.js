import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'
import logo from './logo_bonniernews.png'
import Avatar from './components/avatar'

const App = () => (
  <Router>
    <div>
      <nav>
        <div className="bonnier-wrapper">
          <img src={logo} alt="Bonnier logo" />
        </div>
      </nav>
      <div className="banner">
        <div className="title-wrapper">
          <p>Personuppgiftspolicy för Bonnier News</p>
        </div>
        <Avatar width={150} height={150} />
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
