import React from 'react'
//import { login, password } from './components/login/login'

export const auth = {
  login: (login, password) => {
    //console.log( login, password) //- выполняет авторизацию

    const usersList = localStorage.getItem('loft-taxi-users')

    if (usersList) {
      let usersArr = JSON.parse(usersList)
      for (const userItem of usersArr) {
        if (userItem.login === login && userItem.password === password) {
          console.log('Bingo!')
          //props.stateHandler('order', true)
          localStorage.setItem('loft-taxi-auth', true)
          auth.isLoggedIn = true
          break
        }
      }
      !localStorage.getItem('loft-taxi-auth', true) &&
        alert('Пользователь не найден')
      
    } else alert('Зарегистрируйтесь')

  }, 
  logout: () => {}, //- меняет статус на “незалогиненный”
  isLoggedIn: Boolean(localStorage.getItem('loft-taxi-auth'))
}

export const AuthContext = React.createContext()

/*

const usersList = localStorage.getItem('loft-taxi-users')

    if (usersList) {
      let usersArr = JSON.parse(usersList)
      for (const userItem of usersArr) {
        if (userItem.login === login && userItem.password === password) {
          console.log('Bingo!')
          props.stateHandler('order', true)
          localStorage.setItem('loft-taxi-auth', true)
          break
        }
      }
      !localStorage.getItem('loft-taxi-auth', true) &&
        alert('Пользователь не найден')
      document.getElementById('email').value = ''
      document.getElementById('password').value = ''
    } else alert('Зарегистрируйтесь')

*/
