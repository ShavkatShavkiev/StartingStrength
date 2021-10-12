import React from 'react';
import { StyleSheet, Text, View, Dimensions,Alert, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class Header extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        currentLift: 0,

      }
  }


  changedItem = (index) => {
    this.setState({
      currentLift: index
    })
    this.props.changeCurrentLift(index)
  }

  NumbersEdited = (e) => {
    this.props.liftNumberUpdated(this.state.currentLift, e.nativeEvent.text)
  }

  _renderItem = ({item, index}) => {
    return (
        <View style={headerStyle.big3}>
            <TextInput style={headerStyle.items, headerStyle.liftName}>{item.lift}</TextInput>
            <TextInput style={headerStyle.items, headerStyle.weight} onChange={this.NumbersEdited} keyboardType='numeric'>{item.number}</TextInput>
        </View>
    );
}

  render(){
    return (
      <View style={headerStyle.container}>
        <Carousel
          layout = {'default'}
          data = {this.props.lifts}
          renderItem={this._renderItem}
          sliderWidth={ Dimensions.get('window').width }
          itemWidth={150}
          onSnapToItem={this.changedItem}
        />
      </View>
    )
  }


}

const headerStyle = StyleSheet.create({
  container: {
    flex: .15,
    marginTop: 90,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  items: {
    color: 'white',
    fontSize: 30
  },
  big3: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'
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