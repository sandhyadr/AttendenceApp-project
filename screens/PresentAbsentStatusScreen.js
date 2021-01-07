import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import StudentList from './StudentList';
import db from '../Config';
import PresentAbsentStatus from '../components/PresentAbsentStatus';

export default class PresentAbsentStatusScreen extends Component{
  goToPreviousScreen = () => {
    this.props.navigation.navigate('studentsStatus');
  };

  render() {
    return (
      <View style={{backgroundColor: '#00ffff'}}>
        <AppHeader/>

        <PresentAbsentStatus 
          presentNo = {this.props.navigation.getParam('presentNo')}
          absentNo = {this.props.navigation.getParam('absentNo')}
        />

        <TouchableOpacity
          style={styles.prevPageButton}
          onPress={() => {
            this.goToPreviousScreen();
          }}>
          <Text style={styles.buttonText}>
            Click here to go back to the previous screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },

  prevPageButton: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    borderRadius: 5,
  },
});
