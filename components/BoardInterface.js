import React from 'react'
import { View } from 'react-native'
import PieceList from './PieceList'
import Board from './Board'

export default class BoardInterface extends React.Component {
  constructor() {
    super()
    this.state = {
      board: [],
      activePiece: null
    }
  }

  //save square coords and name to state
  saveSquareCoords = (squareName, coords) => {
    this.setState({
      board: [...this.state.board, [squareName, coords]]
    })
  }

  render() {
    return (
      // total height = 364 + 72 = 436
      <View
        style={{ height: 436 }}
        // onTouchStart={() => console.log(this.state.board)}
        onTouchStart={() => console.log(this.state.activePiece)}
      >
        {/* PieceList height: 36 * 2 = 72 */}
        <PieceList
          color='b'
          setActivePiece={p => this.setState({ activePiece: p })}
        />
        {/* board height = 364 */}
        <Board propagateCoords={this.saveSquareCoords} />
        <PieceList color='w' />
      </View>
    )
  }
}
