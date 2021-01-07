import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import StudentList from './screens/StudentList';
import AppHeader from './components/AppHeader';
import PresentAbsentStatusScreen from './screens/PresentAbsentStatusScreen';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

const MySwitchNavigator = createSwitchNavigator({
  studentsStatus:StudentList,
  studentPresent_Absent:PresentAbsentStatusScreen
});

const AppContainer = createAppContainer(MySwitchNavigator);