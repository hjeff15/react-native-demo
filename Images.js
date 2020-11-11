import React from 'react'

import {
  Dimensions,
  Image,
  StyleSheet,
  AppRegistry,
  View,
  Text
} from 'react-native'

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={picSierra}></Image>
        <Text style={styles.userName}>Sierra Spencer</Text>
        <Image style={styles.pic} source={picTanner}></Image>
        <Text style={styles.userName}>Tanner McTab</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pic:{
    flex: 1,
    width: Dimensions.get("window").width,
    resizeMode: "cover"
  },
  userName: {
    backgroundColor: "rgba(0,0,0,0.8)",
    fontSize: 30,
    color: "white"
  }
})

AppRegistry.registerComponent('SampleApp', () => App)

export default App;
