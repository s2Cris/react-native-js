import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navegacao = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={styles.title}>HOME</Text>
                <Button title='Ir para Fotos' onPress={() => navegacao.navigate('Fotos')} />
                <Button title='Ir para Cadastro' onPress={() => navegacao.navigate('Cadastro')} />
                <Button title='Ir para Localização' onPress={() => navegacao.navigate('Localizacao')} />
            </View>

            <View style={styles.content}>
                <Image
                source={require('./img/funnyhouse.png')}
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
        marginTop: 40,
        alignItems: 'center',
        gap: 10,
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
        fontSize: 30,
        color: '#444',
        fontWeight: 'bold',
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 110,
        borderWidth: 3,
        borderColor: '#1a3d7c',
        marginBottom: 20,
    },
});