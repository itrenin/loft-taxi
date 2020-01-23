import React from 'react'

export default class Register extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  handleLogin(e) {
    e.preventDefault()
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
          <button data-rout="login" onClick={this.handleLogin}>
            Войти
          </button>
        </label>
      </>
    )
  }
}
