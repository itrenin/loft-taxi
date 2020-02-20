import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button
} from '@material-ui/core/'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import { MCIcon } from 'loft-taxi-mui-theme'
import Background from '../common/Background'
import { getCard, profileRequest, profileClear } from '../../modules/profile'
import ProfileAlert from '../ProfileAlert'
//import {Formik, Field as FormikField} from 'formik'
import { clearRoutes } from '../../modules/route'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  profile: {
    padding: '56px 0 72px',
    width: '950px'
  },
  profileContainer: {
    padding: '0 8%'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '46px'
  },
  cardsContainer: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: {
    justifyContent: 'space-between',
    width: '46%',
    height: '200px',
    padding: '30px',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  },
  resetButton: {
    marginLeft: '1rem',
    backgroundColor: 'red'
  }
}))
const formErrors = {
  cardError: false,
  cardHelper: '',
  cvcError: false,
  cvcHelper: '',
  nameError: false,
  nameHelper: ''
}

const Profile = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cardFromStore = useSelector(getCard)
  const [card, setCard] = useState({
    cvc: '',
    cardNumber: '',
    expiryDate: '',
    cardName: ''
  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    if (Object.keys(cardFromStore).length) {
      setCard({
        cvc: cardFromStore.cvc,
        cardNumber: cardFromStore.cardNumber,
        expiryDate: cardFromStore.expiryDate,
        cardName: cardFromStore.cardName
      })
    } else {
      setCard({
        cvc: '',
        cardNumber: '',
        expiryDate: '',
        cardName: ''
      })
    }
  }, [cardFromStore])

  useEffect(() => {
    dispatch(clearRoutes())
  }, [dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'cardNumber' && !value.match(/^\d{13,16}$/)) {
      formErrors.cardError = true
      formErrors.cardHelper = 'в номере карты должно быть 13 или 16 цифр'

    }
    if (name === 'cardNumber' && value.match(/^\d{13,16}$/)) {
      formErrors.cardError = false
      formErrors.cardHelper = ''
    }

    if (name === 'cvc' && !value.match(/^\d{3}$/)) {
      formErrors.cvcError = true
      formErrors.cvcHelper = 'в cvc должно быть 3 цифры'
    }
    if (name === 'cvc' && value.match(/^\d{3}$/)) {
      formErrors.cvcError = false
      formErrors.cvcHelper = ''
    }
    if (name === 'cardName' && !value.match(/[A-Z]+$/)){
      formErrors.nameError = true
      formErrors.nameHelper = 'Имя должно содержать только латинские буквы в верхнем регистре'
    }
    if (name === 'cardName' && value.match(/[A-Z]+$/)){
      formErrors.nameError = false
      formErrors.nameHelper = ''
    }
    // console.log(formErrors.cardError)

    setCard({
      ...card,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formErrors.cardError || !formErrors.cvcError || !formErrors.nameError) {
      setUpdated(true)
      dispatch(profileRequest(card))
    }
  }

  const handleDateChange = (date) => {
    setCard({ ...card, expiryDate: date.toDateString() })
  }

  const renderAlert = () => {
    return (
      <>
        <Paper className={classes.form}>
          <ProfileAlert
            header="Профиль"
            body="Информация о карте обновлена. теперь можете заказать такси."
            btnText="На карту"
            linkTo="/map"
          />
        </Paper>
      </>
    )
  }

  return (
    <Background>
      <Container className={classes.container}>
        <Paper className={classes.profile}>
          <Container className={classes.profileContainer}>
            {updated && renderAlert()}
            {!updated &&
              <>
                <Box textAlign="center">
                  <Typography variant="h4">Профиль</Typography>
                  <Typography>Способ оплаты</Typography>
                </Box>
                <form onSubmit={handleSubmit}>

                  <Box className={classes.cardsContainer}>
                    <Paper className={classes.card}>
                      <MCIcon />
                      <TextField
                        value={card.cardNumber}
                        error={formErrors.cardError}
                        onChange={handleChange}
                        label="Номер карты:"
                        name="cardNumber"
                        helperText={formErrors.cardHelper}
                        required
                        fullWidth
                      />
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          onChange={handleDateChange}
                          label="Срок действия:"
                          placeholder="12/21"
                          name="expiryDate"
                          views={['year', 'month']}
                          format="MM/yy"
                          value={card.expiryDate ? card.expiryDate : null}
                          disablePast
                          disableToolbar
                          required
                          fullWidth
                        />
                      </MuiPickersUtilsProvider>
                    </Paper>
                    <Paper className={classes.card}>
                      <TextField
                        value={card.cardName}
                        error={formErrors.nameError}
                        helperText={formErrors.nameHelper}
                        onChange={handleChange}
                        label="Имя владельца:"
                        name="cardName"
                        required
                        fullWidth
                      />
                      <TextField
                        error={formErrors.cvcError}
                        helperText={formErrors.cvcHelper}
                        value={card.cvc}
                        onChange={handleChange}
                        label="CVC"
                        name="cvc"
                        type="password"
                        required
                        fullWidth
                      />
                    </Paper>
                  </Box>
                  <Box className={classes.buttonContainer}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Сохранить
            </Button>
                    <Button
                      className={classes.resetButton}
                      onClick={() => dispatch(profileClear())}
                      type="reset"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Очистить
                  </Button>
                  </Box>
                </form>
              </>
            }

          </Container>
        </Paper>
      </Container>
    </Background>
  )
}

export default Profile
