import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link as RouteLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
//import { AuthContext } from '../../context'
//import {some} from '../../store/some'
import { getError, getLoading, signInRequest } from '../../modules/auth'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login(props) {
  Login.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  }
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const error = useSelector(getError)
  const loading = useSelector(getLoading)

  const classes = useStyles()
  //const context = useContext(AuthContext)

  const handleChange = ({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signInRequest(user))

    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
  }

  return (
    <Box className="register-login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography component="span">
                  Новый пользователь?&nbsp;
                </Typography>
                <span data-route="register">
                  <Link to="/signup" component={RouteLink}>
                    Зарегистрируйтесь
                  </Link>
                </span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="email"
                  label="Имя пользователя"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  //required
                />
              </Grid>
            </Grid>
            <Box style={{ color: 'red', marginTop: '16px' }}>
              {error && error}
            </Box>
            <Button
              type="submit"
              //onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading ? true : false}
            >
              Войти
            </Button>
            <Grid container justify="flex-end"></Grid>
          </form>
        </div>
      </Container>
    </Box>
  )
}

// export { login, password }
