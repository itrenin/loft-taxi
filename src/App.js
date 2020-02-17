
// import React, { useContext, useState, useEffect } from 'react'
// import { Logo } from 'loft-taxi-mui-theme'
// import Header from '../src/components/header/header'
// import Profile from '../src/components/profile/profile'
// import Order from '../src/components/order/order'
// import Register from '../src/components/register/register'
// import Login from '../src/components/login/login'

// import './App.css'
// import { AuthContext } from '../src/context'
// import { store } from '../src/store'

// const PAGES = (setPage) => ({
//   profile: <Profile />,
//   order: <Order />,
//   register: <Register setPage={setPage} />,
//   login: <Login setPage={setPage} />
// })

// export default function App() {
//   const { isLoggedIn } = useContext(AuthContext)
//   const [page, setPage] = useState(isLoggedIn ? 'order' : 'login')

//   useEffect(() => {
//     isLoggedIn ? setPage('order') : setPage('login')
//   }, [isLoggedIn])
//   console.log(store)
//   return (
  
//     <div className='App'>
//       {page !== 'order' && (
//         <div className={'logowrapper'}>
//           <Logo white />
//         </div>
//       )}

//       {isLoggedIn && <Header setPage={setPage} />}

//       {PAGES(setPage)[page]}
//     </div>
//   )
// }