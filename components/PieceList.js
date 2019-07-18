import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Piece from './Piece'

const PieceList = ({ color, setActivePiece }) => {
  const styles = StyleSheet.create({
    pieces: {
      height: 36,
      justifyContent: 'center',
      flexDirection: 'row'
    }
  })
  return (
    <View style={styles.pieces}>
      <View>
        <Piece pieceName={`${color}P`} setActivePiece={setActivePiece} />
      </View>
      <View>
        <Piece pieceName={`${color}B`} setActivePiece={setActivePiece} />
      </View>
      <View>
        <Piece pieceName={`${color}K`} setActivePiece={setActivePiece} />
      </View>
      <View>
        <Piece pieceName={`${color}Q`} setActivePiece={setActivePiece} />
      </View>
      <View>
        <Piece pieceName={`${color}R`} setActivePiece={setActivePiece} />
      </View>
      <View>
        <Piece pieceName={`${color}N`} setActivePiece={setActivePiece} />
      </View>
    </View>
  )
}

export default PieceList
