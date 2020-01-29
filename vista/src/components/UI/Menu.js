import React, {Component} from 'react'
import { Modal, ImageBackground, Text, TextInput, SafeAreaView, TouchableHighlight, View, Alert, Button, StyleSheet, Image} from 'react-native'
//import ImagePicker from 'react-native-image-picker'
import axios from 'axios';
import DatePicker from 'react-native-datepicker'

  const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'
  //const fondo = require('../../assets/fondo.jpg')
  const API_URL = "http://192.168.43.44:3000/api/menu";  //CAMBIAR DEPENDIENDO IP DE SU MAQUINA

  export default class Menu extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        nombre: '',
        descripcion: '',
        precio: '',
        fecha: ''
      }
    }

    changeNombre = (nombre) => {
      this.setState({nombre})
    }
    changeDescripcion = (descripcion) => {
      this.setState({descripcion})
    }
    changePrecio = (precio) => {
      this.setState({precio})
    }
    changeFecha = (fecha) => {
      this.setState({fecha})
    }

    saveData = e => {
      if (this.state.nombre === "" || this.state.descripcion === "" || this.state.precio === "" || this.state.fecha === "") {
        alert("Complete todos los datos para continuar...");
      } else {
        axios.post(API_URL, this.state)
        .then(response => {
          alert("Agregado Exitosamente :D");
        })
        .catch(error => {
          alert("Ups!! Algo salio mal... Disculpe Pablito :c")
        })
      }
    }

    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    render() {
      return (
      <ImageBackground source={{uri:image}} style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={styles.container}>
        <View>
          <Modal 
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert('Modal has been closed.');
            }}>
            <View style={styles.modalStyle}>
              <View>
                {/* <Button title="Choose File" 
                // onPress={this.chooseFile.bind(this)} 
                /> */}
                <Text>Producto:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí el producto"
                  value={ this.state.nombre }
                  onChangeText={ (e) => this.changeNombre(e) }
                />
                <Text>Descripción:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí la descripción"
                  value={ this.state.descripcion }
                  onChangeText={ (e) => this.changeDescripcion(e) }
                />
                <Text>Precio:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí el precio"
                  value={ this.state.precio }
                  onChangeText={ (e) => this.changePrecio(e) }
                />
                <Text>Fecha:</Text>
                <DatePicker
                  style={{width: 200}}
                  date={this.state.fecha}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2020-01-01"
                  maxDate="2021-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(fecha) => {this.setState({fecha: fecha})}}
                />
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Atrás</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {this.saveData()}}>
                  <Text>Grabar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Text style={styles.textMenu}>Crear menú de la Semana</Text>
          <View style={styles.separator}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Lunes</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Martes</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Miércoles</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Jueves</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Viernes</Text>
          </TouchableHighlight>          
        </View>
        </SafeAreaView>
        </ImageBackground>
      );
    }
  } 
    
  const styles = StyleSheet.create({
        container: {
            flex:1,
            alignItems:'center',
            marginTop: 50,
        },
        text: { 
            textAlign: 'center',
            fontWeight: '100',
            color: '#eee' 
        },
        textMenu:{
            fontSize: 20,
            marginTop:0
        },
        touchStyle:{
            backgroundColor: '#000',
            borderColor:'#eee',
            padding:10,
            borderRadius:5,
        },
        separator: {
            marginVertical: 10,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        separator1: {
            marginVertical: 10,
            borderBottomColor: '#eee',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        modalStyle:{
          flex:1,
          alignItems:'center',
          marginTop: 100,
        }
  })
