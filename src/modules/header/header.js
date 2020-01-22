import React from 'react'

function Header(props) {
  function buttonHandler(e) {
    console.log(e.target.dataset.route)
    if (e.target.dataset.route === 'logout') {
      if (localStorage.getItem('loft-taxi')) {
        localStorage.removeItem('loft-taxi')
        props.stateHandler('login', false)
        //e.target.style = "display: none";
      } else console.error('Удален ключ loft-taxi')
    } else {
      props.stateHandler(e.target.dataset.route)
    }
  }
  return (
    <header className="App-header">
      <button data-route="profile" onClick={buttonHandler}>
        Профиль
      </button>
      <button data-route="order" onClick={buttonHandler}>
        Заказать
      </button>
      <button data-route="login" onClick={buttonHandler}>
        Войти
      </button>
      <button data-route="logout" onClick={buttonHandler}>
        Выйти
      </button>
      <button data-route="register" onClick={buttonHandler}>
        Зарегистрироваться
      </button>
    </header>
  )
}

export default Header
