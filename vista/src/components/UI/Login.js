import * as React from 'react';
import { Text,TextInput,View,Button, Image,ImageBackground, StyleSheet } from 'react-native';
//import { Router, Scene } from 'react-native-router-flux'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Menu from './Menu'
const imgbg = require('../../assets/hamburger-895831_1280.jpg');

class MenuScreen extends React.Component {
  render() {
    return (
      <Menu />
    );
  }
}

export default class LoginScreen extends React.Component {
  static navigationOptions ={
    header: null,
    error:null,
    title: 'Bienvenidos',
    nombre:'',
    email:'',
    sending:false
  }

  render() {
    return (
        <ImageBackground source={{imgbg}} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <View style={styles.containerUserName}>
              {/* <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/> */}
              <TextInput placeholder="Nombre" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>
            <View style={styles.separator1}/>
            <View style={styles.containerPassword}>
              {/* <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/> */}
              <TextInput placeholder="Email" placeholderTextColor="gray"
              style={styles.textInput} secureTextEntry={true}/> 
            </View>
            <View style={styles.separator1}/>
            <View style={styles.containerSignIn}>
              <Button  title='Ingresar' backgroundColor='#ffa100'/>
            </View>            
          </View>        
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'stretch',
  },
  containerSignIn:{
    height: 60,
    marginLeft:'10%',
    marginRight:'10%',
    paddingTop:'2%'
  },
  containerUserName:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerPassword:{
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    marginLeft:'10%',
    marginRight:'10%',
  },
  containerRegister:{
    height: 60,
    marginLeft:'6%',
    marginRight:'6%',
    alignItems: 'center',
  },
  icon:{
    flex:1
  },
  textInput:{
    backgroundColor:'transparent',
    flex:1,
    color:'black',
    paddingLeft:'25%',
    opacity: 0.8,
  },
  separator1: {
    marginVertical: 10,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})