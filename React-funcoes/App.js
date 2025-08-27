import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
 
export default function App() {
  const [imagemAB, setimagemAB] = useState(require('./src/Frieren.png'));
  const [imagemCD, setimagemCD] = useState(require('./src/Maomao.png'));
  const [imagemEF, setimagemEF] = useState(require('./src/Yor.png'));
  
  function alternarAB() {
    if (imagemAB === require('./src/Frieren.png')) {
      setimagemAB(require('./src/Himmel.png'));
    } else {
      setimagemAB(require('./src/Frieren.png'));
    }
  }

  function alternarCD() {
    if (imagemCD === require('./src/Maomao.png')) {
      setimagemCD(require('./src/Jinshi.png'));
    } else {
      setimagemCD(require('./src/Maomao.png'));
    }
  }

  function alternarEF() {
    if (imagemEF === require('./src/Yor.png')) {
      setimagemEF(require('./src/Loid.png'));
    } else {
      setimagemEF(require('./src/Yor.png'));
    }
  }

  return (
    <View style={styles.principal}>
      
      <View style={styles.row}>
        
        <View style={styles.container1}>
          <Text style={styles.texto}>Frieren & Himmel</Text>
          <Image source={imagemAB} style={styles.img01} />
          <Button title="Trocar Imagens" onPress={alternarAB} />
        </View>

        <View style={styles.container2}>
          <Text style={styles.texto}>Maomao & Jinshi</Text>
          <Image source={imagemCD} style={styles.img02} />
          <Button title="Trocar Imagens" onPress={alternarCD} />
        </View>
        
        <View style={styles.container3}>
          <Text style={styles.texto}>Yor & Loid</Text>
          <Image source={imagemEF} style={styles.img03} />
          <Button title="Trocar Imagens" onPress={alternarEF} />
        </View>

      </View>

    </View>

  );
}
 
const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#FF9999',
    padding: 10,
    container1: {
      justifyContent: 'flex-start'
    },
    container2: {
      justifyContent: 'center'
    },
    container3: {
      justifyContent: 'flex-end'
    },
  },
  container1: {
    flex: 1,
    backgroundColor: '#f8b195',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#f67280',
    padding: 10,
    width: 100,
    height: 950,
  },
  container2: {
    flex: 1,
    backgroundColor: '#cce5ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#6c5b7b',
    padding: 10,
    width: 100,
    height: 950,
  },
  container3: {
    flex: 1,
    backgroundColor: '#b2f7ef',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#355c7d',
    padding: 5,
    width: 100,
    height: 950,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#355c7d',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 10,
  },
  img01: {
    width: 553,
    height: 680,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#f67280',
  },
  img02: {
    width: 334,
    height: 750,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6c5b7b',
  },
  img03: {
    width: 325,
    height: 797,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#355c7d',
  },
});

// comandos cmd usados para criar o projeto
// npx create-expo-app --template (blank -> React-funcoes)
// npm i -g expo-cli
// npx expo start
// npx expo install react-dom react-native-web @expo/metro-runtime
// npx expo start