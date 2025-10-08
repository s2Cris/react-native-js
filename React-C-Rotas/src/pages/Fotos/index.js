import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Fotos() {
    const navegacao = useNavigation();
    return (
        <View style={styles.container}>
            <FontAwesome
                name="youtube"
                size={25}
                color="#f00"
                style={{ marginRight: 10 }}
            />
            <Text>Página Fotos</Text>
            <Button title='Voltar para Home' onPress={() => navegacao.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});