import React from "react";

function Header(props) {
  function buttonHandler(e) {
    if (e.target.className === "logout") {
      if (localStorage.getItem("loft-taxi")) {
        localStorage.removeItem("loft-taxi");
        props.stateHandler("login");
        //e.target.style = "visibility: hidden";
      } else console.error("Удален ключ loft-taxi");
    } else {
      props.stateHandler(e.target.className);
    }
  }
  //   let style = {};
  //   let logoutStyle = style => {
  //     localStorage.getItem("loft-taxi")
  //       ? (style = { visibility: "visible" })
  //       : (style = { visibility: "hidden" });
  //   };

  return (
    <header className="App-header">
      <button className="profile" onClick={buttonHandler}>
        Профиль
      </button>
      <button className="order" onClick={buttonHandler}>
        Заказать
      </button>
      <button className="login" onClick={buttonHandler}>
        Войти
      </button>
      <button className="logout" onClick={buttonHandler}>
        Выйти
      </button>
      <button className="register" onClick={buttonHandler}>
        Зарегистрироваться
      </button>
    </header>
  );
}

export default Header;
