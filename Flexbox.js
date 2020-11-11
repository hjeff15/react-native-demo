import React from 'react';
import { 
  StyleSheet,
  AppRegistry, 
  Text, 
  StatusBar,
  View } 
  from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#DDD",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around"
    },
    defaultText:{
      textAlign: "center",
      fontSize: 22,
      padding: 10,
      margin: 5,
      borderWidth: StyleSheet.hairlineWidth,
      color: "salmon"
    },
    selectedText: {
      alignSelf: "flex-end",
      textAlign: "center",
      backgroundColor: "yellow",
      color: "blue",
      fontWeight: "bold"
    }
  })

class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden='true' />
        <Text style={styles.defaultText}>Lucy</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Hugo</Text>
        <Text style={styles.defaultText}>Sierra</Text>
      </View>
    )
  }
}
AppRegistry.registerComponent("SampleApp", () => App);

export default App;