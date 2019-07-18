import React from 'react'
import { View } from 'react-native'
import PieceList from './PieceList'
import Board from './Board'

export default class BoardInterface extends React.Component {
  constructor() {
    super()
    this.state = {
      board: [],
      zones: [],
      activePiece: null
    }
  }

  //save square coords and name to state
  saveSquareCoords = (squareName, coords) => {
    this.setState({
      board: [...this.state.board, [squareName, coords]],
      zones: [...this.state.zones, coords]
    })
  }

  //check if piece dropped over square, and if so which one
  isOverSquare(gesture) {
    let area = this.state.squareCoords
    return gesture.moveY > area.y && gesture.moveY < area.y + area.height
  }

  //save piece on square
  occupySquare = piece => {
    //drop piece on hovered over square
    console.log('droppinp ' + piece)
  }

  render() {
    return (
      // total height = 364 + 72 = 436
      <View
        style={{ height: 436 }}
        onTouchStart={() => console.log(this.state.zones)}
      >
        {/* PieceList height: 36 * 2 = 72 */}
        <PieceList
          occupySquare={this.occupySquare}
          color='b'
          setActivePiece={p => this.setState({ activePiece: p })}
        />
        {/* board height = 364 */}
        <Board propagateCoords={this.saveSquareCoords} />
        <PieceList
          occupySquare={this.occupySquare}
          color='w'
          setActivePiece={p => this.setState({ activePiece: p })}
        />
      </View>
    )
  }
}
