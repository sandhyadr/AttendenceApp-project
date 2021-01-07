import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import StudentList from '../screens/StudentList';
import db from '../Config';

export default class PresentAbsentStatus extends Component{

  render() {
    return (
      <View style={{ backgroundColor: 'pink' }}>

      <Text style={styles.hText} > Student's Daily Status</Text>

        <Text style={styles.presentStatusText}>
          Number of students present : {this.props.presentNo}
        </Text>
        <Text style={styles.absentStatusText}>
          Number of students absent : {this.props.absentNo}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentStatusText: {
    marginBottom: 50,
    marginLeft: 10,
    marginTop: 50,
    fontWeight: 'bold',
    height:"50%"
  },
  absentStatusText: {
    marginBottom: 100,
    marginLeft: 10,
  
    fontWeight: 'bold',
    marginTop : 70
  },
  hText: {
    marginBottom: 50,
    marginLeft: 10,
    marginTop: 50,
    fontWeight: 'bold',
    alignSelf:'center',
    height:"50%"
  }
});
