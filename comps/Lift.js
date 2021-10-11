import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Lifts extends React.Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }
  render(){
    return (
      <View style={headerStyle.body}>
        <View style={headerStyle.lift}>
          <Text style={{color: 'white'}}>40% X5</Text>
          <Text style={{color: 'white'}}>FILL ME IN</Text>
        </View>
        <View style={headerStyle.lift}>
          <Text style={{color: 'white'}}>40% X5</Text>
          <Text style={{color: 'white'}}>FILL ME IN</Text>
        </View>
        <View style={headerStyle.lift}>
          <Text style={{color: 'white'}}>40% X5</Text>
          <Text style={{color: 'white'}}>FILL ME IN</Text>
        </View>
      </View>
    )
  }


}

const headerStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    // justifyContent: 'space-around'
  },
  lift: {
    justifyContent: 'space-around'
  }
})

export default Lifts