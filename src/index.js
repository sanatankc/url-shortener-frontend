import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, } from 'react-router-dom'
import './index.css'
import Route from './route'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <Route />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
