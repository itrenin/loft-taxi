import React from "react";

function Header(props) {
  


  return (
    <header className="App-header">
      <button onClick={props.buttonHandler}>Профиль</button>
      <button onClick={props.buttonHandler}>Заказать</button>
      <button onClick={props.buttonHandler}>Войти</button>
      <button onClick={props.buttonHandler}>Зарегистрироваться</button>
    </header>
  );
}

export default Header;
