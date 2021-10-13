import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


class Footer extends React.Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  render(){
    return (
      <SafeAreaView style={headerStyle.footer}>
        <Text style={{color: 'white'}}> TEST!!! </Text>
      </SafeAreaView>
    )
  }


}

const headerStyle = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: 'black'
  },
})

export default Footer