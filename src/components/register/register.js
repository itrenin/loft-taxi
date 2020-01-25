import React from 'react'
import Button from '@material-ui/core/Button'

export default class Register extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const user = {
      login: e.target.email.value,
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value
    }
    let usersArr
    let isUserRegistered = false

    if (!localStorage.getItem('loft-taxi-users')) {
      usersArr = [user]
    } else {
      usersArr = JSON.parse(localStorage.getItem('loft-taxi-users'))
      for (const userItem of usersArr) {
        if (userItem.login === user.login) {
          isUserRegistered = true
          alert('Пользователь с email ' + user.login + ' уже существует!')
        }
        break
      }
    }
    if (!isUserRegistered) {
      usersArr.push(user)
      console.log(isUserRegistered)
      localStorage.setItem('loft-taxi-users', JSON.stringify(usersArr))
    }
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.stateHandler('login', false)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Почта:
            <input name="email" type="text" placeholder="examle@domain.com" />
          </label>
          <label>
            Имя:
            <input name="name" type="text" placeholder="Ваше имя" />
          </label>
          <label>
            Фамилия:
            <input name="lastName" type="text" placeholder="Ваша фамилия" />
          </label>
          <label>
            Пароль:
            <input name="password" type="password" placeholder="пароль" />
          </label>
          <label>
            <input type="submit" value="Зарегистрироваться" />
          </label>
        </form>
        <label>
          уже зарегистрированы?
          <Button
            data-rout="login"
            onClick={this.handleLogin}
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        </label>
      </>
    )
  }
}
