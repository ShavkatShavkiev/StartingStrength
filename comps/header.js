import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }
  render(){
    return (
      <View style={headerStyle.container}>
        <View style={headerStyle.big3}>
          <View style={headerStyle.lifts}>
          <Text style={headerStyle.items, headerStyle.liftName}>Bench</Text>
          <Text style={headerStyle.items}>265</Text>
          </View>
          <View style={headerStyle.lifts}>
          <Text style={headerStyle.items, headerStyle.liftName}>Squat</Text>
          <Text style={headerStyle.items}>265</Text>
          </View>
          <View style={headerStyle.lifts}>
          <Text style={headerStyle.items, headerStyle.liftName}>Deadlift</Text>
          <Text style={headerStyle.items}>265</Text>
          </View>
        </View>
        <View style={headerStyle.weeks}>
          <Text>5/5/5</Text>
          <Text>3/3/3</Text>
          <Text>5/3/1</Text>
        </View>
      </View>
    )
  }


}

const headerStyle = StyleSheet.create({
  container: {
    flex: .3,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  items: {
    color: 'white',
    fontSize: 30
  },
  big3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weeks: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  liftName: {
    fontSize: 24,
    color: 'white'
  },
  lifts: {
    alignItems: 'center'
  }
})

export default Header