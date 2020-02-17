import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from 'loft-taxi-mui-theme'
import { getIsLoggedIn } from '../../modules/auth'

import Order from '../order'
import Profile from '../profile'
import Header from '../header'
import PrivateRoute from '../PrivatRoute'
import AuthRouter from '../AuthRouter'
import login from '../login'
import register from '../register'
import '../../App.css'

const RootRouter = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {isLoggedIn && <Header />}
          <Switch>
            <PrivateRoute path="/map" component={Order} />
            <PrivateRoute path="/profile" component={Profile} />
            <AuthRouter path="/login" component={login} />
            <AuthRouter path="/signup" component={register} />
            <Redirect to="/map" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default RootRouter
