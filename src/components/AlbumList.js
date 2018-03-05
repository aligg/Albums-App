import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List </Text>
      </View>
    )
  }
}

export default AlbumList


/* 
Functional components:

Used for presenting static data
can't handle fetching data
easy to write
traditionally used to display things

eg: 
const Header = () 

vs

Class components

more capability
used to take in data, or really anytime something might change
(handles user events, fetching data etc)
class components based on es6 js classes

eg:

class ComponentName extends Component 
class base components need render method!
*/
