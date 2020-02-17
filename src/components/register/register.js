import React, { useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { getError, getLoading, signUpRequest } from '../../modules/auth'
import { useSelector, useDispatch } from 'react-redux'

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

export default function Register(props) {
  const classes = useStyles()

  // const handleRegister = (e) => {
  //   e.preventDefault()
  //   const user = {
  //     login: document.getElementById('email').value,
  //     firstName: document.getElementById('firstName').value,
  //     lastName: document.getElementById('lastName').value,
  //     password: document.getElementById('password').value
  //   }
  //   let usersArr = []
  //   let isUserRegistered = false

  //   if (!localStorage.getItem('loft-taxi-users')) {
  //     usersArr.push(user)
  //   } else {
  //     usersArr = JSON.parse(localStorage.getItem('loft-taxi-users'))
  //     for (const userItem of usersArr) {
  //       if (userItem.login === user.login) {
  //         isUserRegistered = true
  //         alert('Пользователь с email ' + user.login + ' уже существует!')
  //         break
  //       }
  //     }
  //     if (!isUserRegistered) {
  //       usersArr.push(user)
  //     }
  //   }
  //   localStorage.setItem('loft-taxi-users', JSON.stringify(usersArr))
  //   props.setPage('login')
  // }

  const [user, setUser] = useState({
    email: '',
    name: '',
    surname: '',
    password: ''
  })
  const dispatch = useDispatch()
  const error = useSelector(getError)
  const loading = useSelector(getLoading)
  //const classes = useStyle()

  const handleChange = ({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signUpRequest(user))
  }

  return (
    <Box className="register-login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography component="span">
                  Уже зарегистрированы?&nbsp;
                </Typography>
                <span data-route="login">
                  <Link to="/login" component={RouteLink}>
                    Войдите
                  </Link>
                </span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="email"
                  label="Адрес электронной почты"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  onChange={handleChange}
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Имя"
                  value={user.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="surname"
                  label="Фамилия"
                  name="surname"
                  autoComplete="surname"
                  value={user.surname}
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
                  value={user.password}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Box style={{ color: 'red', marginTop: '16px' }}>
              {error && error}
            </Box>
            <Button
              type="submit"
              disabled={loading ? true : false}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Зарегистрироваться
            </Button>
            <Grid container justify="flex-end"></Grid>
          </form>
        </div>
      </Container>
    </Box>
  )
}
