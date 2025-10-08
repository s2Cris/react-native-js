import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Fotos() {

    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.Header}>
                <Text style={styles.title}>Fotos</Text>
            </View>
        
            <View style={styles.content}>
                <Image source={require('./img/madoka.png')} style={styles.image1}/>
                <Image source={require('./img/homura.png')} style={styles.image2}/>
                <Image source={require('./img/mami.png')} style={styles.image3}/>
                <Image source={require('./img/kyoko.png')} style={styles.image4}/>
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
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 200,
        gap: 60,
    },
    Text: {
        fontSize: 30,
        color: '#444',
        fontWeight: 'bold',
    },
    image1: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#db2fcd',
        backgroundColor: '#fff',
    },
    image2: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#0844b4',
        backgroundColor: '#fff',
    },
    image3: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#f2c300', 
        backgroundColor: '#fff',
    },
    image4: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#e64a19', 
        backgroundColor: '#fff',
    },
});