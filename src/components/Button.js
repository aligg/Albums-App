import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = () => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Click
      </Text>
    </TouchableOpacity>
    )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

// remember, flex 1 means expand to fill as much content as possible
export default Button
