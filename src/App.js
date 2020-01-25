/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Order from './components/order/order'
import Register from './components/register/register'
import Login from './components/login/login'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const hasAuthorization = Boolean(localStorage.getItem('loft-taxi'))

    this.state = {
      path: hasAuthorization ? 'order' : 'login',
      isLogin: hasAuthorization
    }
  }

  static propTypes = {
    stateHandler: PropTypes.func,
    isLogin: PropTypes.Boolean
  }

  stateHandler = (path, isLogin) => {
    this.setState({ path, isLogin })
  }

  PAGES = {
    profile: () => <Profile />,
    order: () => <Order />,
    register: () => <Register stateHandler={this.stateHandler} />,
    login: () => <Login stateHandler={this.stateHandler} />
  }

  render() {
    return (
      <div className="App">
        {this.state.isLogin && (
          <Header
            stateHandler={this.stateHandler}
            isLogin={this.state.isLogin}
          />
        )}

        {this.PAGES[this.state.path]()}
      </div>
    )
  }
}
