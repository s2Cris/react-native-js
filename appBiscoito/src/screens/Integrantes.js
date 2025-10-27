import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Integrantes({ navigation }) {

  return (
    <View style={estilos.containerPrincipal}>

      <Text style={estilos.titulo}>Sobre o App</Text>
      
      <Text style={estilos.texto}>
        Integrantes
      </Text>

      <Image source={require('../assets/eu.jpg')} style ={estilos.foto} resizeMode="cover"/>

      <Text style={estilos.texto}>
        Cristian Marcheti
      </Text>

      <TouchableOpacity style={estilos.botao} onPress={() => navigation.goBack()}>
        <Text style={estilos.btnTexto}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );

}

const estilos = StyleSheet.create({

  containerPrincipal: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#dd7b22',
    padding: 14,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  foto: {
    width: 200,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  }
  
});
