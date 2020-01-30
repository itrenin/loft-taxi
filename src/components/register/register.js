import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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

  // тут меняем стейт на логин, чтобы войти на сайт
  const handleLogin = (e) => {
    e.preventDefault()
    props.stateHandler('login', false)
  }

    // тут меняем стейт на логин, чтобы войти на сайт
  const handleRegister = (e) => {
    e.preventDefault()
    const user = {
      login: document.getElementById('email').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      password: document.getElementById('password').value
    }
    let usersArr = []
    let isUserRegistered = false
   
    if (!localStorage.getItem('loft-taxi-users')) {
      usersArr.push(user);
    } else {
      usersArr = JSON.parse(localStorage.getItem('loft-taxi-users'))
      for (const userItem of usersArr) {
        if (userItem.login === user.login) {
          isUserRegistered = true
          alert('Пользователь с email ' + user.login + ' уже существует!')
          break
        }
      }
      if (!isUserRegistered) {
        usersArr.push(user)
        
      }
    }
    localStorage.setItem('loft-taxi-users', JSON.stringify(usersArr))
  }

  return (
    <Box className="register-login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item>
                <Typography component="span">
                  Уже зарегистрированы?&nbsp;
                </Typography>
                <Link href="#" variant="body2" onClick={handleLogin}>
                  Войдите
                </Link>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Адрес электронной почты"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Фамилия"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              onClick={handleRegister}
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
