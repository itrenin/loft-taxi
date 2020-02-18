import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Order from './order'
import ProfileAlert from '../../components/ProfileAlert'
import OrderAlert from './orderAlert'
import { getIsOrderMade } from '../../modules/route'
import { getIsCardFilled } from '../../modules/profile'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  form: {
    margin: 30,
    maxWidth: 300,
    position: 'absolute',
    zIndex: 200,
    top: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: theme.spacing(3)
  }
}))

const OrderPage = () => {
  const classes = useStyles()
  const isOrderMade = useSelector(getIsOrderMade)
  const cardIsFilled = useSelector(getIsCardFilled)

  console.log('isOrderMade')
  console.log(isOrderMade)
  console.log('cardIsFilled')
  console.log(cardIsFilled)

  return (
    <Grid
      container
      spacing={0}
      className={classes.container}
      alignItems="center"
      justify="flex-start"
    >
      <Grid item xs={12} md={8}>
        <Paper className={classes.form} >
          {cardIsFilled && !isOrderMade && <Order />}
          {cardIsFilled && isOrderMade && <OrderAlert />}
          {!cardIsFilled && (
            <ProfileAlert
              header="Заполните платежные данные!"
              body="Введите данные вашей карты для того, чтобы сделать заказ."
              btnText="в профиль"
              linkTo="/profile"
            />
          )}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default OrderPage
