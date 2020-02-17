import { createStore, compose, applyMiddleware } from 'redux'
//import reducer from '../modules/auth/reducer'
import { authMiddleware } from './middleware'
import { persistStore } from 'redux-persist'
import rootReducer, { rootSaga } from '../modules'
//const INITIAL_STATE = {}

// export const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(authMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

export default function createAppStore() {
    //const sagaMiddleware = createSagaMiddleware()
  
    const store = createStore(
        rootReducer,
      compose(
        applyMiddleware(authMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (noop) => noop
      )
    )
    
    const persistor = persistStore(store)
    //sagaMiddleware.run(rootSaga)
  
    return { store, persistor }
  }
