import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon, LinearProgress } from 'react-native-elements'

class Lifts extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        taped: {
          '5/5/5': {
            0: {},
            1: {},
            2: {}
          },
          '3/3/3': {
            0: {},
            1: {},
            2: {}
          },
          '5/3/1': {
            0: {},
            1: {},
            2: {}
          }
        }
      }
  }

  handleTaps = (index, week, current) => {
    // console.log(index, week, current)
    let result = this.state.taped
    result[week][current][index] = !result[week][current][index]
    this.setState({
      taped: result
    })
  }

  roundDownToTheNearest5 = (number, percent) => {
    return Math.floor((number * percent)/5) *5
  }

  render(){
    if(this.props.week === 1){
      return (
        <View style={headerStyle.body}>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(1,'5/5/5', this.props.current)}>
            {this.state.taped['5/5/5'][this.props.current]['1'] === true ? (<Icon name='check' color='red' style={headerStyle.icon}/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>40% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.40)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(2,'5/5/5', this.props.current)}>
          {this.state.taped['5/5/5'][this.props.current]['2'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>50% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.50)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(3,'5/5/5', this.props.current)}>
          {this.state.taped['5/5/5'][this.props.current]['3'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>60% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.60)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(4,'5/5/5', this.props.current)}>
          {this.state.taped['5/5/5'][this.props.current]['4'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>65% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.65)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(5,'5/5/5', this.props.current)}>
          {this.state.taped['5/5/5'][this.props.current]['5'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>75% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.75)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(6,'5/5/5', this.props.current)}>
          {this.state.taped['5/5/5'][this.props.current]['6'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>85% X5+</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.85)}.0</Text>
          </TouchableOpacity>
        </View>
      )
    }
    if(this.props.week === 2){
      return (
        <View style={headerStyle.body}>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(1,'3/3/3', this.props.current)}>
          {this.state.taped['3/3/3'][this.props.current]['1'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>40% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.40)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(2,'3/3/3', this.props.current)}>
          {this.state.taped['3/3/3'][this.props.current]['2'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>50% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.50)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(3,'3/3/3', this.props.current)}>
          {this.state.taped['3/3/3'][this.props.current]['3'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>60% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.60)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(4,'3/3/3', this.props.current)}>
          {this.state.taped['3/3/3'][this.props.current]['4'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>70% X3</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.70)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(5,'3/3/3', this.props.current)}>
          {this.state.taped['3/3/3'][this.props.current]['5'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>80% X3</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.80)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(6,'3/3/3', this.props.current)}>
          {this.state.taped['3/3/3'][this.props.current]['6'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>90% X3+</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.90)}.0</Text>
          </TouchableOpacity>
        </View>
      )
    }
    if(this.props.week === 3){
      return (
        <View style={headerStyle.body}>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(1,'5/3/1', this.props.current)}>
          {this.state.taped['5/3/1'][this.props.current]['1'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>40% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.40)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(2,'5/3/1', this.props.current)}>
          {this.state.taped['5/3/1'][this.props.current]['2'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>50% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.50)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(3,'5/3/1', this.props.current)}>
          {this.state.taped['5/3/1'][this.props.current]['3'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers, headerStyle.warmup}>60% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.60)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(4,'5/3/1', this.props.current)}>
          {this.state.taped['5/3/1'][this.props.current]['4'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>75% X5</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.75)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(5,'5/3/1', this.props.current)}>
          {this.state.taped['5/3/1'][this.props.current]['5'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>85% X3</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.85)}.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyle.lift} onPress={() => this.handleTaps(6,'5/3/1', this.props.current)}>
          {this.state.taped['5/3/1'][this.props.current]['6'] === true ? (<Icon name='check' color='red'/>) : (null)}
            <Text style={headerStyle.numbers}>95% X1+</Text>
            <Text style={headerStyle.numbers, headerStyle.warmup, headerStyle.weight}>{this.roundDownToTheNearest5(this.props.lift[this.props.current].number,.95)}.0</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }


}

const headerStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column'
  },
  lift: {
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 5
  },
  numbers: {
    color: 'white',
    fontSize: 25
  },
  warmup: {
    color: 'gray',
    fontSize: 22
  },
  weight: {
    color: 'white',
    fontSize: 32,
    marginLeft: 'auto'
  },
})

export default Lifts