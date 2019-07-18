import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Board from './components/Board'
import Piece from './components/Piece'
import BoardInterface from './components/BoardInterface'

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
      }
    })
    return (
      <View style={styles.container}>
        <BoardInterface />
      </View>
    )
  }
}
