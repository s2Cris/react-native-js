import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
 
export default function App() {
  const [texto01, settexto01] = useState('Mensagem exemplo 01');
  const [texto02, settexto02] = useState('Mensagem exemplo 02');
 
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.button}>
      <Text style={styles.texto01}>{texto01}</Text>
      <Button title="Clique para mudar" onPress={() => settexto01('Você clicou!')} />
        
        <View>
          <Text style={styles.texto02}>{texto02}</Text>
          <Button title="Clique para mudar" onPress={() => settexto02('Você clicou!')} />
        </View>
        
        </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#FF9999',
  },
  texto01: {
    fontSize: 24,
    marginBottom: 20,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  texto02:{
    fontSize: 24,
    marginBottom:20,
    marginRight: 15,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 10,
    marginRight: 10,
  },
});