import React from 'react'
import 'normalize.css'
import ReactDOM from 'react-dom'
import RootRouter from './components/RootRouter'
import { Provider } from 'react-redux'
import createAppStore from './store'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)