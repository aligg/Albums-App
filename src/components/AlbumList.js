import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail 
        key={album.title} 
        album={album}
      />
      )
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
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

Life Cycle methods: 
 
 functions that we place on our class that wil be automatically called at some point.

 componentWillMount is a lifecycle method


 state vs props!

 from parent to child component = props
 for component's internal record keeping =  state 
*/
