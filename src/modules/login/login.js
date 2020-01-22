import React from "react";

export default class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    const login = e.target.login.value;
    const password = e.target.password.value;

    if (localStorage.getItem("loft-taxi")) {
      localStorage.removeItem("loft-taxi");
    }
    localStorage.setItem(
      "loft-taxi",
      JSON.stringify(`login: ${login}, pasword: ${password}`)
    );

    e.target.login.value = "";
    e.target.password.value = "";

    this.props.stateHandler("order");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Логин:
          <input name="login" type="text" placeholder="логин" />
        </label>
        <label>
          Пароль:
          <input name="password" type="password" placeholder="пароль" />
        </label>
        <label>
          <input type="submit" value="Войти" />
        </label>
        <div>Регистрация</div>
      </form>
    );
  }
}
