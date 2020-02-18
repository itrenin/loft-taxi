import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
  signUpApi,
  signInApi,
  logout
} from '../modules/auth'

import {
  profileRequest,
  profileSuccess,
  profileFailure,
  postProfileApi,
  getProfileApi
} from '../modules/profile'

import {
  fetchAddressesRequest,
  fetchAddressesSuccess,
  fetchAddressesFailure,
  getAddressListApi
} from '../modules/addresses'

import {
  fetchCoordsRequest,
  fetchCoordsSuccess,
  fetchCoordsFailure,
  setIsOrderMade,
  clearRoutes,
  getCoordsApi
} from '../modules/route'

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === logout.toString()) {
    localStorage.removeItem('loft-taxi-auth')
  }
  if (action.type === signInRequest.toString()) {
    //do login
    signInApi(action.payload)
      .then((response) => {
        !!response.data.success && store.dispatch(signInSuccess(response.data))
        !response.data.success && store.dispatch(signInFailure(response.data))
      })
      .catch(() => {
        store.dispatch(
          signInFailure({
            ...store,
            success: false,
            error: 'Ошибка сетевого соединения'
          })
        )
      })
  }
  if (action.type === signUpRequest.toString()) {
    console.log(action.payload)
    signUpApi(action.payload)
      .then((response) => {
        !!response.data.success && store.dispatch(signUpSuccess(response.data))
        !response.data.success && store.dispatch(signUpFailure(response.data))
      })
      .catch(() => {
        store.dispatch(
          signInFailure({
            ...store,
            success: false,
            error: 'Ошибка сетевого соединения'
          })
        )
      })
  }
  if (action.type === profileRequest.toString()) {
    //console.log('сохраняем кредитку')
    const token = store.getState().user.token
    //console.log({...action.payload, token} )
    try {
      postProfileApi({ ...action.payload, token })
        .then((response) => {
          if (response.data.success) {
            getProfileApi(token).then((response) => {
              store.dispatch(profileSuccess(response.data))
            })
          }
        })
        .catch(() => {
          store.dispatch(profileFailure(action.payload))
        })
    } catch (error) {
      profileFailure(error)
    }
  }
  if (action.type === fetchAddressesRequest.toString()) {
    try {
      getAddressListApi()
        .then((response) => {
          store.dispatch(fetchAddressesSuccess(response.data.addresses))
        })
        .catch((error) => {
          store.dispatch(fetchAddressesFailure(error))
        })
    } catch (error) {
      store.dispatch(fetchAddressesFailure(error))
    }
  }
  if (action.type === fetchCoordsRequest.toString()) {
    try {
      getCoordsApi(action.payload)
        .then((response) => {
          store.dispatch(fetchCoordsSuccess(response.data))
        })
        .catch((error) => {
          store.dispatch(fetchCoordsFailure(error))
        })
    } catch (error) {
      store.dispatch(fetchCoordsFailure(error))
    }
  }
  next(action)
}
