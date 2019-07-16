import React from 'react'
import { View, StyleSheet } from 'react-native'

const Square = ({ matrixID, squareID }) => {
  const styles = StyleSheet.create({
    light: {
      backgroundColor: '#fff',
      width: 45,
      height: 45
    },
    dark: {
      backgroundColor: '#8833dd',
      width: 45,
      height: 45
    }
  })
  const squareColor =
    matrixID.rank % 2 === matrixID.file % 2 ? styles.light : styles.dark

  return <View style={squareColor} onTouchStart={() => console.log(squareID)} />
}

export default Square
