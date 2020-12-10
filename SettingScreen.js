import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput,Alert } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class SettingScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId : '',
            firstName :'',
            lastName : '',
            address: '',
            contact : '',
            docid : '',
        }
    }

    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    emailId : data.email_id,
                    firstName : data.first_name,
                    lastName : data.last_name,
                    address : data.address,
                    contact : data.contact,
                    docid :doc.id(),

                })
            })
        })
    }

    updateUserDetails=()=>{
    db.collection('users').doc(this.state.docid).update({
        "first_name" : this.state.firstName,
        "last_name" : this.state.lastName,
        "address" : this.state.address,
        "contact" : this.state.contact,
    }) 
    Alert.alert("Profile updated succesfuly") ;
    }

    componentDidMount(){
        this.getUserDetails();
    }
    render(){
        return(
            <View>
                <MyHeader title = "Settings" navigation = {this.props.navigation}/>
                <View>
                   <TextInput
                    placeholder={"First Name"}
                    style={styles.formTextInput}
                    maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({
                            firstName : text
                        })
                    }} 
                    value = {this.state.firstName} />

                   <TextInput
                   placeholder={"Last Name"}
                   maxLength={8}
                   style={styles.formTextInput}
                   onChangeText={(text)=>{
                       this.setState({
                           lastName : text
                       })
                   }}
                   value = {this.state.lastName}/>

                   <TextInput
                   placeholder={"Contact"}
                   maxLength={10}
                   keyboardType={'numeric'}
                   style={styles.formTextInput}
                   onChangeText={(text)=>{
                       this.setState({
                           contact : text
                       })
                   }}
                   value = {this.state.contact}/>

                   <TextInput
                   placeholder={"Address"}
                   multiline={true}
                   style={styles.formTextInput}
                   onChangeText={(data)=>{
                       this.setState({
                           address : text
                       })
                   }}
                   value = {this.state.address}/>

                   <TouchableOpacity style={styles.button} onPress={()=>{
                       this.updateUserDetails();
                   }}>
                       <Text style= {styles.buttonText}> Save</Text>
                   </TouchableOpacity>
                </View>

               
            </View>
        );
    }
}

const styles = StyleSheet.create({
     container :{ 
         flex:1,
         alignItems: 'center',
          justifyContent: 'center' 
        }, 
     formContainer:{
            flex:1,
            width:'100%',
            alignItems: 'center' 
        }, 
     formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1, 
        marginTop:20, 
        padding:10,
        }, 
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
         alignItems:'center',
         borderRadius:10,
         backgroundColor:"#ff5722",
         shadowColor: "#000",
         shadowOffset: {
          width: 0,
          height: 8,
         },
         shadowOpacity: 0.44,
         shadowRadius: 10.32,
         elevation: 16,
         marginTop:20 },

     buttonText:{ 
     fontSize:25, 
     fontWeight:"bold",
      color:"#fff" } })