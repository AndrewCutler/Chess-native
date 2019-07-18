import React from 'react'
import { pieces } from '../pieces'
import { View, StyleSheet, PanResponder, Animated } from 'react-native'

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY(),
      pieceCoords: null
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gesture) => {
        // save active piece
        this.props.setActivePiece(this.props.pieceName)
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {
        //check if square is valid
        this.props.occupySquare(this.props.pieceName)
        //unset active piece on drop
        this.props.setActivePiece('')
        if (this.props.square !== '') {
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start()
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: this.state.pan.x, y: this.state.pan.y }
          }).start()
        }
      }
    })
  }

  findPieceCoords = e => {
    this.setState({
      pieceCoords: e.nativeEvent.layout
    })
  }

  render() {
    let imgSource
    switch (this.props.pieceName) {
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

    const styles = StyleSheet.create({
      piece: {
        width: 35,
        height: 35
      }
    })

    return (
      <View onLayout={this.findPieceCoords}>
        <Animated.Image
          source={imgSource}
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.piece]}
        />
      </View>
    )
  }
}
