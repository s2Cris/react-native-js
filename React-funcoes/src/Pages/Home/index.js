import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity title="Ir para Fotos" onPress={() => navegacao.navigate('Fotos')}></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});