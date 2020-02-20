import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from 'loft-taxi-mui-theme'
import { getIsLoggedIn } from '../../modules/auth'

import Map from '../Order'
import Profile from '../Profile'
import Header from '../Header'
import PrivateRoute from '../PrivatRoute'
import AuthRouter from '../AuthRouter'
import Login from '../Login'
import Register from '../Register'
import '../../App.css'

const RootRouter = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {isLoggedIn && <Header />}
          <Switch>
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={Profile} />
            <AuthRouter path="/login" component={Login} />
            <AuthRouter path="/signup" component={Register} />
            <Redirect to="/map" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default RootRouter
