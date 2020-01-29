import React,{Component} from 'react';
import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Text, TextInput,View,Button, ImageBackground, StyleSheet } from 'react-native';
import Home from './Home';
//import { Router, Scene } from 'react-native-router-flux'
import axios from 'axios';

const screens = {
  Home: {
      screen: Home,
      navigationOptions: {
          headerShown: false  
      },
  },
}


//const LoginStack = createStackNavigator(screens);

const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'

const API_URL = "http://192.168.43.44:3000/api/login";  //CAMBIAR DEPENDIENDO IP DE SU MAQUINA

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre:'',
      correo:''
    };
  }

  changeNombre = (nombre) => {
    this.setState({nombre})
  }

  changeCorreo = (correo) => {
    this.setState({correo})
  }

  loginAccess = () => {
    if (this.state.correo === "" || this.state.nombre === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_URL, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          alert("entrar")
          // return this.props.navigation.push('Home')
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  static navigationOptions ={
    header: null,
    error:null,
    title: 'Bienvenidos',
    sending:false
  }

  render() { 
    return (
        <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <View>
              <View style={styles.containerUserName}>
                <TextInput placeholder="Nombre" placeholderTextColor="gray"
                style={styles.textInput}
                value={ this.state.nombre }
                onChangeText={ this.changeNombre } 
                /> 
              </View>
              <View style={styles.separator1}/>
              <View style={styles.containerPassword}>
                <TextInput placeholder="Email" placeholderTextColor="gray"
                style={styles.textInput}
                value={ this.state.correo }
                onChangeText={ this.changeCorreo } 
                /> 
              </View>
              <View style={styles.separator1}/>
              <View style={styles.containerSignIn}>
                <Button title='Ingresar' backgroundColor='#ffa100' onPress={ () => { this.loginAccess() } }/>
              </View>   
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