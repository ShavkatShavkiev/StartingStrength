import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './comps/header.js'
import Lifts from './comps/Lift.js'
import Weeks from './comps/week.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentLift : 1,
      week: 1,
      allLifts: [{lift: 'Bench', number: 265},{lift: 'Squat', number: 368},{lift: 'Deadlift', number: 450}]
    }
  }

  changeWeek = (index) => {
    this.setState({
      week: index
    })
  }

  changeCurrentLift = (index) => {
    this.setState({
      currentLift: index
    })
  }

  liftNumberUpdated = (index, weight) => {
    let updated = this.state.allLifts
    updated[index].number = weight
    this.setState({
      allLifts: updated
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Header lifts={this.state.allLifts} changeCurrentLift={this.changeCurrentLift} liftNumberUpdated={this.liftNumberUpdated}/>
        <Weeks changeWeek={this.changeWeek}/>
        <Lifts lift={this.state.allLifts} current={this.state.currentLift} week={this.state.week}/>
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