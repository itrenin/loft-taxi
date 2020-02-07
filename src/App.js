/* eslint-disable react/no-typos */
import React, { useContext, useState, useEffect } from 'react'
//import PropTypes from 'prop-types'
import { Logo } from 'loft-taxi-mui-theme'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Order from './components/order/order'
import Register from './components/register/register'
import Login from './components/login/login'

import './App.css'
import { AuthContext } from './context'

const PAGES = (setPage) => ({
  profile: <Profile setPage={setPage} />,
  order: <Order setPage={setPage} />,
  register: <Register setPage={setPage} />,
  login: <Login setPage={setPage} />
})

export default function App() {
  const { isLoggedIn } = useContext(AuthContext)
  const [page, setPage] = useState('login')

  useEffect(() => {
    isLoggedIn ? setPage('order') : setPage('login')
  }, [isLoggedIn])
  // console.log(page)
  return (
    <div className={page === 'order' ? 'App-nobackground' : 'App'}>
      {page !== 'order' && (
        <div className={'logowrapper'}>
          <Logo white />
        </div>
      )}

      {isLoggedIn && <Header setPage={setPage} />}

      {PAGES(setPage)[page]}
    </div>
  )
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)

//     const hasAuthorization = Boolean(localStorage.getItem('loft-taxi-auth'))

//     this.state = {
//       path: hasAuthorization ? 'order' : 'login',
//       isLogin: hasAuthorization
//     }
//   }

//   static contextType = AuthContext

//   componentDidMount() {
//     //let value = this.context;
//     /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
//     console.log('из дидмаунт')
//     console.log(this.context)
//     this.stateHandler('', this.context.isLoggedIn)
//   }

//   static propTypes = {
//     stateHandler: PropTypes.any,
//     isLogin: PropTypes.Boolean
//   }

//   stateHandler = (path, isLogin) => {
//     if (path === '') {
//       isLogin ? (path = 'order') : (path = 'login')
//     }
//     this.setState({ path, isLogin })
//   }

//   PAGES = {
//     profile: () => <Profile />,
//     order: () => <Order />,
//     register: () => <Register stateHandler={this.stateHandler} />,
//     login: () => <Login stateHandler={this.stateHandler} />
//   }

//   render() {
//     //this.stateHandler(this.context.isLoggedIn)
//     //console.log(this.props)
//     return (
//       <div className={this.state.path === 'order' ? 'App-nobackground' : 'App'}>
//         {/*console.log(this.hasAuthorization)*/}
//         {this.state.path !== 'order' && (
//           <div className={'logowrapper'}>
//             <Logo white />
//             {/* Что передавать в лого, чтобы получить src LogoWhite, как засунуть кастомные стили?*/}
//           </div>
//         )}

//         {this.state.isLogin && (
//           <Header
//             stateHandler={this.stateHandler}
//             isLogin={this.state.isLogin}
//           />
//         )}

//         {this.PAGES[this.state.path]()}
//       </div>
//     )
//   }
// }
