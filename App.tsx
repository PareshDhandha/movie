import {  StyleSheet } from 'react-native'
import React from 'react'
import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})