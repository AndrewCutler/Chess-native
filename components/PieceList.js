import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Piece from './Piece'

const PieceList = ({ color }) => {
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
        <Piece pieceName={`${color}P`} />
      </View>
      <View>
        <Piece pieceName={`${color}B`} />
      </View>
      <View>
        <Piece pieceName={`${color}K`} />
      </View>
      <View>
        <Piece pieceName={`${color}Q`} />
      </View>
      <View>
        <Piece pieceName={`${color}R`} />
      </View>
      <View>
        <Piece pieceName={`${color}N`} />
      </View>
    </View>
  )
}

export default PieceList
