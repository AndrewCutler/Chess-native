import React from 'react'
import { pieces } from '../pieces'
import { Image, StyleSheet, PanResponder, Animated } from 'react-native'

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY()
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {}
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
      <Animated.Image
        source={imgSource}
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.piece]}
      />
    )
  }
}
