import React from 'react'
import { View, StyleSheet } from 'react-native'

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squareCoords: null
    }
  }
  findSquareCoords = e => {
    this.setState({
      squareCoords: e.nativeEvent.layout
    })
  }
  render() {
    // const Square = ({ matrixID, squareID }) => {
    const styles = StyleSheet.create({
      light: {
        backgroundColor: '#fff',
        width: 45,
        height: 45
      },
      dark: {
        backgroundColor: '#8833dd',
        width: 45,
        height: 45
      }
    })
    const squareColor =
      this.props.matrixID.rank % 2 === this.props.matrixID.file % 2
        ? styles.light
        : styles.dark

    return (
      <View
        style={squareColor}
        onLayout={this.findSquareCoords}
        onTouchStart={() => console.log(squareID)}
      />
    )
  }
}
