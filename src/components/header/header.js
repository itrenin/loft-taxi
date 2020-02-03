import React, { useContext } from 'react'
//import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
//import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Logo } from 'loft-taxi-mui-theme'
import { AuthContext } from '../../context'
//import IconButton from '@material-ui/core/IconButton';
//import SearchIcon from '@material-ui/icons/Search';
//import Typography from '@material-ui/core/Typography'
//import Link from '@material-ui/core/Link';

function Header(props) {
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: 'white'
      //maxWidth: '1170px'
    },
    toolbarTitle: {
      flex: 1
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto'
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0
    }
  }))
  const classes = useStyles()
  const context = useContext(AuthContext)
  function buttonHandler(e) {
    e.preventDefault()
    context.logout(e)
    //console.log(e.target.parentNode.parentNode.dataset.route)
    // let isAuth = Boolean(localStorage.getItem('loft-taxi-auth'))

    // if (e.target.parentNode.parentNode.dataset.route === 'logout') {
    //   isAuth && props.stateHandler('login', false)
    //   console.log('isAuth ', isAuth)
    //   localStorage.removeItem('loft-taxi-auth')
    // } else {
    //   props.stateHandler(e.target.parentNode.parentNode.dataset.route, isAuth)
    // }
  }
  return (
    //console.log(props.isLogin),
    // <header className="App-header">
    //   <button data-route="profile" onClick={buttonHandler}>
    //     Профиль
    //   </button>
    //   <button data-route="order" onClick={buttonHandler}>
    //     Заказать
    //   </button>

    //   {!props.isLogin && (
    //     <button data-route="login" onClick={buttonHandler}>
    //       Войти
    //     </button>
    //   )}
    //   {props.isLogin && (
    //     <button data-route="logout" onClick={buttonHandler}>
    //       Выйти
    //     </button>
    //   )}
    // </header>
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <Container maxWidth="1170px"> */}
        <Grid xs={9}>
          <Logo />
          {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        </Grid>
        <Grid xs={1}>
          <div id="order" data-route="order">
            <Button /*variant="outlined"*/ size="small" onClick={buttonHandler}>
              Карта
            </Button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div id="profile" data-route="profile">
            <Button /*variant="outlined"*/ size="small" onClick={buttonHandler}>
              Профиль
            </Button>
          </div>
        </Grid>
        {!props.isLogin && (
          <Grid xs={1}>
            <div id="login" data-route="login">
              <Button
                /*variant="outlined"*/ size="small"
                onClick={buttonHandler}
              >
                Войти
              </Button>
            </div>
          </Grid>
        )}
        {props.isLogin && (
          <Grid xs={1}>
            <div id="logout" data-route="logout">
              <Button
                /*variant="outlined"*/ size="small"
                onClick={buttonHandler}
              >
                Выйти
              </Button>
            </div>
          </Grid>
        )}
        {/* </Container> */}
      </Toolbar>
      {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
       
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"#"}
            className={classes.toolbarLink}
          >
            Навигация
          </Link>
        
      </Toolbar> */}
    </React.Fragment>
  )
}

export default Header
