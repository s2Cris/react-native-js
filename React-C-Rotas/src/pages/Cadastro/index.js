import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    
    const navegacao = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const enviarDados = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Dados enviados',
      `Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`
    );

    // Limpar campos depois de enviar
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <View style={styles.button}>
        <Button title="Enviar" onPress={enviarDados} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e8fbff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a3d7c',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});