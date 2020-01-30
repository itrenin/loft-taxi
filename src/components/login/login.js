import React from 'react'
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

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()

    const login = document.getElementById('email').value
    const password = document.getElementById('password').value

    const usersList = localStorage.getItem('loft-taxi-users')

    if (usersList) {
      let usersArr = JSON.parse(usersList)
      for (const userItem of usersArr) {
        if (userItem.login === login && userItem.password === password) {
          console.log('Bingo!')
          props.stateHandler('order', true)
          localStorage.setItem('loft-taxi-auth', true)
          break
        }
      }
      !localStorage.getItem('loft-taxi-auth', true) &&
        alert('Пользователь не найден')
      document.getElementById('email').value = ''
      document.getElementById('password').value = ''
    } else alert('Зарегистрируйтесь')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(e.target.dataRout)
    props.stateHandler('register', false)
  }
  return (
    <Box className="register-login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item>
                <Typography component="span">
                  Новый пользователь?&nbsp;
                </Typography>
                <Link href="#" variant="body2" onClick={handleRegister}>
                  Зарегистрируйтесь
                </Link>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Имя пользователя"
                  name="email"
                  autoComplete="email"
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
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
