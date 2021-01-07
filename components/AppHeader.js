import React,{Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class AppHeader extends Component{
  render(){
    return(
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>School Attendance App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lightblue'
  },
  text:{
    color: 'blue',
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});