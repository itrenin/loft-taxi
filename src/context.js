import React from 'react'


export const auth = {
  login: (login, password) => {

    const usersList = localStorage.getItem('loft-taxi-users')

    if (usersList) {
      let usersArr = JSON.parse(usersList)
      for (const userItem of usersArr) {
        if (userItem.login === login && userItem.password === password) {
          console.log('Bingo!')
          localStorage.setItem('loft-taxi-auth', true)
          auth.isLoggedIn = true
          console.log(auth.isLoggedIn)
          break
        }
      }
      !localStorage.getItem('loft-taxi-auth', true) &&
        alert('Пользователь не найден')
    } else alert('Зарегистрируйтесь')
  },
  logout: (e) => {

    if (e.target.parentNode.parentNode.dataset.route === 'logout') {
      localStorage.removeItem('loft-taxi-auth')
    }
  },
  isLoggedIn: Boolean(localStorage.getItem('loft-taxi-auth'))
}

export const AuthContext = React.createContext()