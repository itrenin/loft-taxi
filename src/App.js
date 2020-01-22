import React from "react";
import Header from "./modules/header/header";
import Profile from "./modules/profile/profile";
import Order from "./modules/order/order";
import Register from "./modules/register/register";
import Login from "./modules/login/login";
import "./App.css";

export default class App extends React.Component {

constructor(props) {
    super(props);
    if (localStorage.getItem("loft-taxi")) {
        this.state = { path: "order" };
      }
      else this.state = { path: "login" }
}

  stateHandler = state => {
    this.setState({ path: `${state}` });
  };

  PAGES = {
    profile: () => <Profile />,
    order: () => <Order />,
    register: () => <Register />,
    login: () => <Login stateHandler={this.stateHandler} />
  };

  render() {
    return (
      <div className="App">
        <Header stateHandler={this.stateHandler} />
        {this.PAGES[this.state.path]()}
      </div>
    );
  }
}
