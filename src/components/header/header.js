import React from 'react'

function Header(props) {
  function buttonHandler(e) {
    // console.log(e.target.dataset.route)
    let isAuth = Boolean(localStorage.getItem('loft-taxi-auth'))

    if (e.target.dataset.route === 'logout') {
      isAuth && props.stateHandler('login', false)
      console.log('isAuth ', isAuth)
      localStorage.removeItem('loft-taxi-auth')
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
