import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Board from './components/Board'
import Piece from './components/Piece'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pieces}>
        <Piece pieceName='bP' />
        <Piece pieceName='bN' />
        <Piece pieceName='bB' />
        <Piece pieceName='bR' />
        <Piece pieceName='bQ' />
        <Piece pieceName='bK' />
      </View>
      <Board />
      <View style={styles.pieces}>
        <Piece pieceName='wP' />
        <Piece pieceName='wN' />
        <Piece pieceName='wB' />
        <Piece pieceName='wR' />
        <Piece pieceName='wQ' />
        <Piece pieceName='wK' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeddee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pieces: {
    flex: 0.2,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
