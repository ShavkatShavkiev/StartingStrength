import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

class Weeks extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        selectedWeek: 1
      }
  }
  weekPress = (index) => {
    this.setState({
      selectedWeek: index
    })
    this.props.changeWeek(index)
  }

  render(){
    return (
      <View style={headerStyle.weeks}>
      <Text style={{ color: this.state.selectedWeek === 1 ? 'white' : 'black' }} onPress={() => this.weekPress(1)}>5/5/5</Text>
      <Text style={{ color: this.state.selectedWeek === 2 ? 'white' : 'black' }} onPress={() => this.weekPress(2)}>3/3/3</Text>
      <Text style={{ color: this.state.selectedWeek === 3 ? 'white' : 'black' }} onPress={() => this.weekPress(3)}>5/3/1</Text>
    </View>
    )
  }


}

const headerStyle = StyleSheet.create({
  weeks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    fontSize: 20
  },
  week: {
    color: 'black',
    fontSize: 17,
  }
})

export default Weeks