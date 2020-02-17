import React from 'react'
import 'normalize.css'
import ReactDOM from 'react-dom'
import RootRouter from './components/RootRouter'
import { Provider } from 'react-redux'
import createAppStore from './store'
import { PersistGate } from 'redux-persist/integration/react'
// import { postcssNormalize } from 'postcss-normalize'
// import * as css from './App.css'

// postcssNormalize.process( css /*, processOptions, pluginOptions */)

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <Provider store={store}>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Provider>
//   </MuiThemeProvider>,
//   document.getElementById('root')
// )
const { store, persistor } = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)