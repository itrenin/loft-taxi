/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from 'loft-taxi-mui-theme'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Order from './components/order/order'
import Register from './components/register/register'
import Login from './components/login/login'

import './App.css'
import { AuthContext } from './context'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const hasAuthorization = Boolean(localStorage.getItem('loft-taxi-auth'))

    this.state = {
      path: hasAuthorization ? 'order' : 'login',
      isLogin: hasAuthorization
    }
  }

  static propTypes = {
    stateHandler: PropTypes.any,
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
    console.log(this.context)
    return (
      <div className={this.state.path === 'order' ? 'App-nobackground' : 'App'}>
        {/*console.log(this.hasAuthorization)*/}
        {this.state.path !== 'order' && (
          <div className={'logowrapper'}>
            <Logo white />
            {/* Что передавать в лого, чтобы получить src LogoWhite, как засунуть кастомные стили?*/}
          </div>
        )}

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
App.contextType = AuthContext