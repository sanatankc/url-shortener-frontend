import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'
import App from './App'
import getURLfromShortCode from './api/getURLfromShortCode'

class Routes extends Component {
  state = {
    isShortCode: null,
    url: '',
  }
  isDefaultRoute = this.props.location.pathname === '/' || this.props.location.pathname === '/urls'

  componentDidMount() {
    if (!this.isDefaultRoute) {
      this.setIsShortCode()
    }
  }

  async setIsShortCode() {
    console.log(this)
    const route = this.props.location.pathname.slice(1)
    const url = await getURLfromShortCode(route)
    console.log(url)
    if (url !== null) {
      this.setState({
        isShortCode: true,
        url
      })
    } else {
      this.setState({
        isShortCode: false,
      })
    }
  }

  render () {
    if (this.isDefaultRoute) {
      return <App />
    } else {
      if (this.state.isShortCode === null) {
        return <div>Checking...</div>
      }
      if (this.state.isShortCode === true) {
        window.location.replace(this.state.url)
        return <div></div>
      } else {
        return <div>404 Error</div>
      }
    }
  }
}


export default withRouter(Routes)
