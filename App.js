import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Board from './components/Board'
import Piece from './components/Piece'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: '',
      dropSquare: '',
      activePiece: ''
    }
  }
  render() {
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
    return (
      <View
        style={styles.container}
        onTouchStart={() =>
          console.log('active piece: ' + this.state.activePiece)
        }
      >
        {/* black pieces */}
        <View style={styles.pieces}>
          <View onTouchStart={p => this.setState({ activePiece: 'bP' })}>
            <Piece pieceName='bP' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'bN' })}>
            <Piece pieceName='bN' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'bK' })}>
            <Piece pieceName='bK' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'bQ' })}>
            <Piece pieceName='bQ' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'bR' })}>
            <Piece pieceName='bR' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'bB' })}>
            <Piece pieceName='bB' />
          </View>
        </View>
        <Board />
        {/* white pieces */}
        <View style={styles.pieces}>
          <View onTouchStart={p => this.setState({ activePiece: 'wP' })}>
            <Piece pieceName='wP' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'wN' })}>
            <Piece pieceName='wN' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'wK' })}>
            <Piece pieceName='wK' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'wQ' })}>
            <Piece pieceName='wQ' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'wR' })}>
            <Piece pieceName='wR' />
          </View>
          <View onTouchStart={p => this.setState({ activePiece: 'wB' })}>
            <Piece pieceName='wB' />
          </View>
        </View>
      </View>
    )
  }
}
