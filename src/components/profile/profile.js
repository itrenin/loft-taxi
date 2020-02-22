import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'

export default function Profile() {
  return (
    <React.Fragment>
      <div className="profile-modal">
        
        
        <div className='profile-container'>
          <Typography variant="h3" gutterBottom>
            Профиль
          </Typography>
          <Typography variant="h6" gutterBottom>
            Спасоб оплаты
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField required id="expDate" label="Expiry date" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
            <Button
                    type="submit"
                    //onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    color="primary"
                    //className={classes.submit}
                  >
                    Сохоранить
                  </Button>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}
