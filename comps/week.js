import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity style={[this.state.selectedWeek === 1 ? headerStyle.selectedWeek : headerStyle.week]} onPress={() => this.weekPress(1)}>
          <Text style={[this.state.selectedWeek === 1 ? headerStyle.selectedWeek : headerStyle.week]}>5/5/5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[this.state.selectedWeek === 2 ? headerStyle.selectedWeek : headerStyle.week]} onPress={() => this.weekPress(2)}>
          <Text style={[this.state.selectedWeek === 2 ? headerStyle.selectedWeek : headerStyle.week]}>3/3/3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[this.state.selectedWeek === 3 ? headerStyle.selectedWeek : headerStyle.week]} onPress={() => this.weekPress(3)}>
          <Text style={[this.state.selectedWeek === 3 ? headerStyle.selectedWeek : headerStyle.week]}>5/3/1</Text>
        </TouchableOpacity>

      </View>
    )
  }


}

const headerStyle = StyleSheet.create({
  weeks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginBottom: -9
  },
  week: {
    color: 'black',
    fontSize: 19,
    height: 30,
    width: 90,
    textAlign: 'center',
  },
  selectedWeek: {
    color: 'white',
    fontSize: 19,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    height: 30,
    width: 90,
    textAlign: 'center'
  }
})

export default Weeks