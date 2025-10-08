import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Localizacao() {

  const navegacao = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.Header}>
        <Text style={styles.title}>Localização</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.endereco}>Rod. Hilário Ferrari 1810, Salto, SP, 13323-500</Text>
        <Image source={require('./img/delta.png')} style={styles.mapa} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8fbff',
    alignItems: 'center',
  },
  Header: {
    width: '100%',
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a3d7c',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  endereco: {
    fontSize: 30,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mapa: {
    width: 500,
    height: 300,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#1a3d7c',
  },
});