import React from "react";
import Header from "./modules/header/header";
import Profile from "./modules/profile/profile";
import Order from "./modules/order/order";
import Register from "./modules/register/register";
import Login from "./modules/login/login";
import "./App.css";

export default class App extends React.Component {
  state = {
    path: "register"
  };

  buttonHandler = (e) => {
    e.preventDefault();

    switch (e.target.innerText) {
      case "Профиль":
        this.setState({ path: "profile" });
        break; 
      case "Заказать":
        this.setState({ path: "order" });
        break;
      case "Войти":
        this.setState({ path: "login" });
        break;
      case "Зарегистрироваться":
        this.setState({ path: "register" });
        break;
      default:
        this.setState({ path: "login" });
        break;
    }
  }

  render() {

    const PAGES = {
      profile: () => <Profile />,
      order: () => <Order />,
      register: () => <Register />,
      login: () => <Login />
    };

    return (
      <div className="App">
        <Header buttonHandler={this.buttonHandler} />
        {PAGES[this.state.path]()}
      </div>
    );
  }
}
