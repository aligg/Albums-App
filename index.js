import React from 'react'
import { View, AppRegistry } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'albums'} />
    <AlbumList />
  </View>
  )

// reminder, fat arrow function has implicit return
AppRegistry.registerComponent('albums', () => App)
