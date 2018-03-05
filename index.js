// import library to help create a component
import React from 'react'
import { Text, AppRegistry } from 'react-native'
import Header from './src/components/header'

// create a component
const App = () => (
  <Header />
  )


// render it to a device
// reminder, fat arrow function has implicit return
AppRegistry.registerComponent('albums', () => App)
