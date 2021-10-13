import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './comps/header.js'
import Lifts from './comps/Lift.js'
import Weeks from './comps/week.js'
import Footer from './comps/Footer.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentLift : 1,
      week: 1,
      allLifts: [{lift: 'Bench', number: 0},{lift: 'Squat', number: 0},{lift: 'Deadlift', number: 0}]
    }
  }

  componentDidMount(){
    this.load()
  }

  load = async () => {
    try {
      let lifts = await AsyncStorage.getItem('Lift');
      lifts = JSON.parse(lifts)
      if(lifts !== null) {
        this.setState({
          allLifts: lifts
        })
      }

    } catch (err) {
      Alert.alert(err)
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
    }, async () => {
      try{
        let result = JSON.stringify(this.state.allLifts)
        await AsyncStorage.setItem("Lift", result)
      } catch (err) {
        Alert.alert(err)
      }
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Header lifts={this.state.allLifts} changeCurrentLift={this.changeCurrentLift} liftNumberUpdated={this.liftNumberUpdated}/>
        <Weeks changeWeek={this.changeWeek}/>
        <Lifts lift={this.state.allLifts} current={this.state.currentLift} week={this.state.week}/>
        <Footer />
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