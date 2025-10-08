import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navegacao = useNavigation();
    const localImage = require('../assets/welcome.png');

    return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={styles.title}>Tela HOME</Text>
                <Button title='Ir para Fotos' onPress={() => navegacao.navigate('Fotos')} /> 
            </View>

            <View style={styles.content}>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
                style={styles.image}
                />
                <Text style={styles.Text}>Bem-vindo ao App!</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8fbffff',
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
        color: '#333',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontSize: 20,
        color: '#444',
    },
    image: { 
        width: 180, 
        height: 180, 
        marginBottom: 20 
    },
});