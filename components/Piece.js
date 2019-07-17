import React from 'react'
import { pieces } from '../pieces'
import { Image } from 'react-native'

const Piece = ({ pieceName, grabPiece }) => {
  let imgSource
  switch (pieceName) {
    case 'bB':
      imgSource = pieces.bB.uri
      break
    case 'bP':
      imgSource = pieces.bP.uri
      break
    case 'bK':
      imgSource = pieces.bK.uri
      break
    case 'bQ':
      imgSource = pieces.bQ.uri
      break
    case 'bN':
      imgSource = pieces.bN.uri
      break
    case 'bR':
      imgSource = pieces.bR.uri
      break
    case 'wB':
      imgSource = pieces.wB.uri
      break
    case 'wP':
      imgSource = pieces.wP.uri
      break
    case 'wK':
      imgSource = pieces.wK.uri
      break
    case 'wQ':
      imgSource = pieces.wQ.uri
      break
    case 'wN':
      imgSource = pieces.wN.uri
      break
    case 'wR':
      imgSource = pieces.wR.uri
      break
  }
  return (
    <Image
      source={imgSource}
      onTouchStart={() => grabPiece(pieceName)}
      style={{ width: 32, height: 32 }}
    />
  )
}

export default Piece
