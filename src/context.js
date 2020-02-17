import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsAuth] = useState(Boolean(localStorage.getItem('loft-taxi-auth')))
  const loginPath = '/login'

  const login = (login, password) => {
    const usersList = localStorage.getItem('loft-taxi-users')

    if (usersList) {
      let usersArr = JSON.parse(usersList)
      for (const userItem of usersArr) {
        if (userItem.login === login && userItem.password === password) {
          console.log('Bingo!')
          localStorage.setItem('loft-taxi-auth', true)
          setIsAuth(true)
          //console.log(auth.isLoggedIn)
          break
        }
      }
      !localStorage.getItem('loft-taxi-auth', true) &&
        alert('Пользователь не найден')
    } else alert('Зарегистрируйтесь')
  }
  const logout = (e) => {
    if (e.target.parentNode.parentNode.dataset.route === 'logout') {
      //localStorage.removeItem('loft-taxi-auth')
      setIsAuth(false)
    }
  }
  const getContext = () => {
    return {
      isLoggedIn,
      login,
      logout,
      loginPath
    }
  }
  return (
    <AuthContext.Provider value={getContext()}>{children}</AuthContext.Provider>
  )
}
