
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  Text
} from 'react-native'

import ColorButton from './components/ColorButton'

export default class ColorList extends Component {
  constructor(){
    super()
    const availableColors = ["red", "green", "yellow"]
    this.state = {
      backgroundColor: "blue",
      availableColors
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor){
    this.setState({backgroundColor})
  }

  render() {
    const {backgroundColor} = this.state
    return (
      <FlatList style={[styles.container,{backgroundColor}]}>
        
      </FlatList>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
})

AppRegistry.registerComponent('ColorList', () => ColorList);

// export default App;
