import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './comps/header.js'
import Lifts from './comps/Lift.js'
import Weeks from './comps/week.js'


class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Header />
        <Weeks />
        <Lifts />
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },

});

export default App