import React,{Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';

import PresentAbsentStatus from './PresentAbsentStatusScreen';

export default class StudentList extends Component{
  constructor(){
    super();
    this.state = {
      allStudents:[],
      presentPressedList:[],
      absentPressedList:[]
    }
  }

  /*Updates the attendance*/
  updateAttendance = (rollNo, status)=>{
    var id = '';
    if(rollNo <= 9){
      id = '0' + rollNo;
    }
    else{
      id = rollNo
    }
    var today = new Date();
    var dd = today.getDate();
    if (dd < 10){
      dd = '0' + dd;
    }

    var mm = today.getMonth() + 1;
    if (mm < 10){
      mm = '0' + mm;
    }
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    
    var ref_path = id;
    var classRef = db.ref(ref_path);
    classRef.update({
      [today] : status
    });
  }

  /*Instructions for going to next screen with the required arguments for displaying the numbers*/
  goToNextScreen = (presentList, absentList)=>{
    this.props.navigation.navigate('studentPresent_Absent',{
      presentNo: presentList,
      absentNo: absentList
    });
  }
  
  /*Sorts the students roll number wise*/
  studentListSort = ()=>{
    
    var all_students_list = [];
    var classRef = db.ref('/');

    

    classRef.on('value', (data)=>{
      var classAlist = data.val();

    
      for(var student in classAlist){
        all_students_list.push(classAlist[student]);
      }

      all_students_list.sort(function(a,b){
        return a.roll_no - b.roll_no
      });
      
      this.setState({allStudents:all_students_list});
      all_students_list = [];
    });
  }

  /*Sorts the students as soon as the component loads up*/
  componentDidMount(){
    this.studentListSort();
  }

  /*Displays the buttons and the student details in order*/
  render(){
    return(
      <View style = {{backgroundColor: '#00ffff'}}>
        <AppHeader/>
        <View>
        {this.state.allStudents.map((item, index) =>{
          return(
            <View>
              <Text style = {styles.nameText}>Name : {item.name}</Text>
              <Text style = {styles.roll_noText}>Roll No. : {item.roll_no}</Text>
              <Text style = {styles.statusText}>Status : </Text>


            {/*Present updating*/}
              <TouchableOpacity style = {styles.presentStyle}
              onPress = {()=>{
                var presentPressedList = this.state.presentPressedList;
                presentPressedList.push(index+1);

                this.setState({presentPressedList:presentPressedList});
                var roll_no = index+1;
                console.log(this.state.presentPressedList);
                this.updateAttendance(roll_no, "present");
              }}>
                <Text style = {styles.buttonText}>Present</Text>
              </TouchableOpacity>


            {/*Absent updating*/}
              <TouchableOpacity style = {styles.absentStyle}
              onPress = {()=>{
                var absentPressedList = this.state.absentPressedList;
                absentPressedList.push(index+1);

                this.setState({absentPressedList:absentPressedList});
                var roll_no = index+1;
                console.log(this.state.absentPressedList);
                this.updateAttendance(roll_no, "absent");
              }}>
                <Text style = {styles.buttonText}>Absent</Text>
              </TouchableOpacity>


            </View>
          );
        })}
        
      </View>

        <TouchableOpacity style = {styles.nextPageButton}
        onPress = {()=>{
          this.goToNextScreen(this.state.presentPressedList.length, this.state.absentPressedList.length);
        }}>
          <Text style = {styles.buttonText}>Students'
           status (absent or present)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentStyle:{
    marginTop:30,
    marginBottom:0,
    marginLeft:140,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 35,
    borderRadius: 5
  },

  buttonText:{
    textAlign:'center',
    color:'black',
    fontSize:14,
    fontWeight:'bold'
  },

  absentStyle:{
    marginTop:-35,
    marginBottom:10,
    marginLeft:210,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor:'#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 35,
    borderRadius: 5
  },
  nameText:{
    marginBottom:-23,
    marginLeft:10,
    marginTop:15,
    fontWeight:'bold'
  },
  roll_noText:{
    marginBottom:-20,
    marginLeft:50,
    marginTop:25,
    fontWeight:'bold'
  },
  statusText:{
    marginBottom:-55,
    marginLeft:70,
    marginTop:15,
    fontWeight:'bold'
  },
  nextPageButton:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    borderRadius: 5
  }
});