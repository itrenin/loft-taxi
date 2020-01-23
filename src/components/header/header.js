import React from 'react'

function Header(props) {
  function buttonHandler(e) {
    // console.log(e.target.dataset.route)
    let isAuth = Boolean(localStorage.getItem('loft-taxi'))

    if (e.target.dataset.route === 'logout') {
      if (isAuth) {
        localStorage.removeItem('loft-taxi')
        props.stateHandler('login', false)
        //e.target.style = "display: none";
      } else console.error('Удален ключ loft-taxi')
    } else {
      props.stateHandler(e.target.dataset.route, isAuth)
    }
  }
  return (
    console.log(props.isLogin),
    (
      <header className="App-header">
        <button data-route="profile" onClick={buttonHandler}>
          Профиль
        </button>
        <button data-route="order" onClick={buttonHandler}>
          Заказать
        </button>

        {!props.isLogin && (
          <button data-route="login" onClick={buttonHandler}>
            Войти
          </button>
        )}
        {props.isLogin && (
          <button data-route="logout" onClick={buttonHandler}>
            Выйти
          </button>
        )}
      </header>
    )
  )
}

export default Header
