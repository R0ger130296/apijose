import React, {Component} from 'react'
import { StyleSheet, View, ScrollView, Button,Text,TextInput,TouchableHighlight, ImageBackground, Image } from 'react-native'
import axios from 'axios';
  
const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'
const API_URL = `http://172.16.11.120:3000/api/menu`;  //CAMBIAR DEPENDIENDO IP DE SU MAQUINA 

export default class Producto extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        nombre: '',
        descripcion: '',
        precio: '',
        fecha: '',
        arrayRes: [],
      }
    }

    componentDidMount() {
      axios.get(API_URL)
      .then(response => {
        this.setState({id: response.data[3].id})
        this.setState({nombre: response.data[3].nombre})
        this.setState({descripcion: response.data[3].descripcion})
        this.setState({precio: response.data[3].precio})
        this.setState({fecha: response.data[3].fecha})
        this.setState({arrayRes: response.data})
      })
      .catch(error => {
        alert("Ups!! Algo salio mal... Disculpe Pablito :c")
      })
    }

    render() { 
      return (
        <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
        <ScrollView vertical={true}>
          <View style={styles.container}>
                  <Text style={styles.header}>Producto:</Text>
                  <Text style={styles.text}>{ this.state.nombre }</Text>
                  <Text style={styles.header}>Descripción:</Text>
                  <Text style={styles.text}>{ this.state.descripcion }</Text>
                  <Text style={styles.header}>Precio:</Text>
                  <Text style={styles.text}>{ this.state.precio }</Text>
                  <Text style={styles.header}>Fecha:</Text>
                  <Text style={styles.text}>{ this.state.fecha }</Text>
              </View>
          </ScrollView>
        </ImageBackground>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1,alignItems:'center', paddingTop: 100},
    header: { fontSize: 40, height: 50 },
    text: { fontSize: 50, textAlign: 'center', fontWeight: '100', color: 'red' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });