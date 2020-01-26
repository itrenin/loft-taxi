import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from 'loft-taxi-mui-theme'
//import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '30%'
  }
}
const useStyles = makeStyles({
  root: {
    backgroundColor: 'yellow',
    color: props => props.color,
  },
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);
// export default class Login extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault()

//     const login = e.target.login.value
//     const password = e.target.password.value

//     const usersList = localStorage.getItem('loft-taxi-users')

//     if (usersList) {
//       let usersArr = JSON.parse(usersList)
//       for (const userItem of usersArr) {
//         if (userItem.login === login && userItem.password === password) {
//           this.props.stateHandler('order', true)
//           localStorage.setItem('loft-taxi-auth', true)
//           break
//         }
//       }
//       e.target.login.value = ''
//       e.target.password.value = ''
//     } else alert('Зарегистрируйтесь')
//   }

//   handleRegister = (e) => {
//     e.preventDefault()
//     console.log(e.target.dataRout)
//     this.props.stateHandler('register', false)
//   }

//   //classes = useSyles();

//   render() {
//     return (
//       <div className="background">
//         <Logo
//           classes={{
//             root: this.classes.logo // class name, e.g. `classes-nesting-root-x`
//           }}
//         ></Logo>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Логин:
//             <input name="login" type="text" placeholder="email" />
//           </label>
//           <label>
//             Пароль:
//             <input name="password" type="password" placeholder="пароль" />
//           </label>
//           <label>
//             <input type="submit" value="Войти" />
//           </label>
//         </form>
//         <button data-rout="register" onClick={this.handleRegister}>
//           Регистрация
//         </button>
//       </div>
//     )
//   }
// }

function Login(props) {
  Login.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  //const { classes, children, className, ...other } = props

  const handleSubmit = (e) => {
    e.preventDefault()

    const login = e.target.login.value
    const password = e.target.password.value

    const usersList = localStorage.getItem('loft-taxi-users')

    if (usersList) {
      let usersArr = JSON.parse(usersList)
      for (const userItem of usersArr) {
        if (userItem.login === login && userItem.password === password) {
          props.stateHandler('order', true)
          localStorage.setItem('loft-taxi-auth', true)
          break
        }
      }
      e.target.login.value = ''
      e.target.password.value = ''
    } else alert('Зарегистрируйтесь')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(e.target.dataRout)
    props.stateHandler('register', false)
  }
  const classes = useStyles();
  return (
    <div className="background">
      <div className="logowrapper">
        <Logo /> {/* Что передавать в лого, чтобы получить src LogoWhite, как засунуть кастомные стили?*/}
      </div>
      <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />
      
      <form onSubmit={handleSubmit}>
        <label>
          Логин:
          <input name="login" type="text" placeholder="email" />
        </label>
        <label>
          Пароль:
          <input name="password" type="password" placeholder="пароль" />
        </label>
        <label>
          <input type="submit" value="Войти" />
        </label>
      </form>
      <button data-rout="register" onClick={handleRegister}>
        Регистрация
      </button>
    </div>
  )
}
export default withStyles(styles)(Login)
