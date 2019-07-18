import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Piece from './Piece'

const PieceList = ({ color, setActivePiece, occupySquare }) => {
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
        <Piece
          pieceName={`${color}P`}
          occupySquare={occupySquare}
          setActivePiece={setActivePiece}
        />
      </View>
      <View>
        <Piece
          pieceName={`${color}B`}
          occupySquare={occupySquare}
          setActivePiece={setActivePiece}
        />
      </View>
      <View>
        <Piece
          pieceName={`${color}K`}
          occupySquare={occupySquare}
          setActivePiece={setActivePiece}
        />
      </View>
      <View>
        <Piece
          pieceName={`${color}Q`}
          occupySquare={occupySquare}
          setActivePiece={setActivePiece}
        />
      </View>
      <View>
        <Piece
          pieceName={`${color}R`}
          occupySquare={occupySquare}
          setActivePiece={setActivePiece}
        />
      </View>
      <View>
        <Piece
          pieceName={`${color}N`}
          occupySquare={occupySquare}
          setActivePiece={setActivePiece}
        />
      </View>
    </View>
  )
}

export default PieceList
