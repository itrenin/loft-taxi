import React from 'react'

export default class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    const login = e.target.login.value
    const password = e.target.password.value

    if (localStorage.getItem('loft-taxi')) {
      localStorage.removeItem('loft-taxi')
    }
    localStorage.setItem(
      'loft-taxi',
      JSON.stringify(`login: ${login}, pasword: ${password}`)
    )

    e.target.login.value = ''
    e.target.password.value = ''

    this.props.stateHandler('order', true)
  }

  handleRegister = (e) => {
    e.preventDefault()
    console.log(e.target.dataRout)
    this.props.stateHandler('register', false)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Логин:
            <input name="login" type="text" placeholder="email" />
          </label>
          <label>
            Пароль:
            <input name="password" type="password" placeholder="пароль" />
          </label>
          <label>
            <input type="submit" value="Войти" />
          </label>
        </form>
        <button data-rout='register' onClick={this.handleRegister}>Регистрация</button>
      </>
    )
  }
}
