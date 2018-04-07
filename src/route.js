import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import App from './App'

const Routes = props => {
  const { pathname } = props.location
  if (pathname !== '/' && pathname !== '/urls') {
    return <div>Route not found</div>
  } else {
    return <App />
  }
}

export default withRouter(Routes)
