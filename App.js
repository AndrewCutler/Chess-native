import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Board from './components/Board'
import Piece from './components/Piece'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      position: ''
    }
  }

  grabPiece = piece => {
    console.log(piece)
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <View style={styles.pieces}>
          <Piece pieceName='bP' grabPiece={this.grabPiece} />
          <Piece pieceName='bN' grabPiece={this.grabPiece} />
          <Piece pieceName='bB' grabPiece={this.grabPiece} />
          <Piece pieceName='bR' grabPiece={this.grabPiece} />
          <Piece pieceName='bQ' grabPiece={this.grabPiece} />
          <Piece pieceName='bK' grabPiece={this.grabPiece} />
        </View>
        <Board />
        <View style={styles.pieces}>
          <Piece pieceName='wP' grabPiece={this.grabPiece} />
          <Piece pieceName='wN' grabPiece={this.grabPiece} />
          <Piece pieceName='wB' grabPiece={this.grabPiece} />
          <Piece pieceName='wR' grabPiece={this.grabPiece} />
          <Piece pieceName='wQ' grabPiece={this.grabPiece} />
          <Piece pieceName='wK' grabPiece={this.grabPiece} />
        </View>
      </TouchableOpacity>
    )
  }
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
