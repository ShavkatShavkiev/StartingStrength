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
          <Text style={headerStyle.items, headerStyle.weight}>265</Text>
          </View>
          <View style={headerStyle.lifts}>
          <Text style={headerStyle.items, headerStyle.liftName}>Squat</Text>
          <Text style={headerStyle.items, headerStyle.weight}>265</Text>
          </View>
          <View style={headerStyle.lifts}>
          <Text style={headerStyle.items, headerStyle.liftName}>Deadlift</Text>
          <Text style={headerStyle.items, headerStyle.weight}>265</Text>
          </View>
        </View>
      </View>
    )
  }


}

const headerStyle = StyleSheet.create({
  container: {
    flex: .22,
    marginTop: 40,
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
  lifts: {
    alignItems: 'center'
  },
  liftName: {
    fontSize: 15,
    color: 'white'
  },
  weight: {
    fontSize: 50,
    color: 'white'
  }
})

export default Header