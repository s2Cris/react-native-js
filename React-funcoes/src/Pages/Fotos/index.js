import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Fotos() {
    
    const navegacao = useNavigation();
    
    const [imagemAB, setimagemAB] = useState(require('./assets/Frieren.png'));
    const [imagemCD, setimagemCD] = useState(require('./assets/Maomao.png'));
    const [imagemEF, setimagemEF] = useState(require('./assets/Yor.png'));
    const [imagemGH, setimagemGH] = useState(require('./assets/Momo.png'));
    
    function alternarAB() {
        if (imagemAB === require('./assets/Frieren.png')) {
            setimagemAB(require('./assets/Himmel.png'));
        } else {
            setimagemAB(require('./assets/Frieren.png'));
        }
    }
    
    function alternarCD() {
        if (imagemCD === require('./assets/Maomao.png')) {
            setimagemCD(require('./assets/Jinshi.png'));
        } else {
            setimagemCD(require('./assets/Maomao.png'));
        }
    }
    
    function alternarEF() {
        if (imagemEF === require('./assets/Yor.png')) {
            setimagemEF(require('./assets/Loid.png'));
        } else {
            setimagemEF(require('./assets/Yor.png'));
        }
    }
    
    function alternarGH() {
        if (imagemGH === require('./assets/Momo.png')) {
            setimagemGH(require('./assets/Okarun.png'));
        } else {
            setimagemGH(require('./assets/Momo.png'));
        }
    }

    return (
        <View style={styles.principal}>
            
            <FontAwesome name="home" size={30} color="#900" style={{ marginRight: 10 }} />
            <Text>Fotos</Text>
            <TouchableOpacity title="Voltar para Home" onPress={() => navegacao.navigate('Home')}>
                <Text>Voltar para Home</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                
            <View style={styles.container1}>
                <Text style={styles.texto}>Frieren & Himmel</Text>
                <Image source={imagemAB} style={styles.img01} />
                <TouchableOpacity styles={styles.TouchOpa01} onPress={alternarAB}>
                    <view style={styles.linha}>
                        <AntDesign name="cloud" size={25} color="#64afffff" />
                        <Text style={styles.Btntexto}>Trocar Imagens</Text>
                    </view>
                </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <Text style={styles.texto}>Maomao & Jinshi</Text>
                <Image source={imagemCD} style={styles.img02} />
                <TouchableOpacity styles={styles.TouchOpa02} onPress={alternarCD}>
                    <view style={styles.linha}>
                        <FontAwesome name="leaf" size={25} color="#16a31dc5" />
                        <Text style={styles.Btntexto}>Trocar Imagens</Text>
                    </view>
                </TouchableOpacity>
            </View>
        
        <View style={styles.container3}>
                <Text style={styles.texto}>Yor & Loid</Text>
                <Image source={imagemEF} style={styles.img03} />
                <TouchableOpacity styles={styles.TouchOpa03} onPress={alternarEF}>
                    <view style={styles.linha}>
                        <MaterialCommunityIcons name="knife-military" size={25} color="#3f3838ff" />
                        <Text style={styles.Btntexto}>Trocar Imagens</Text>
                    </view>
                </TouchableOpacity>
        </View>

        <View style={styles.container4}>
                <Text style={styles.texto}>Momo & Okarun</Text>
                <Image source={imagemGH} style={styles.img04} />
                <TouchableOpacity styles={styles.TouchOpa04} onPress={alternarGH}>
                    <view style={styles.linha}>
                        <AntDesign name="heart" size={25} color="#c75757ff" />
                        <Text style={styles.Btntexto}>Trocar Imagens</Text>
                    </view>
                </TouchableOpacity>
        </View>

        
        </View>
        
        </View>

        
        
    );
    
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#a35e8eff',
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
    backgroundColor: '#cce5ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#515dc9ff',
    padding: 10,
    width: 100,
    height: 950,
  },
  container2: {
    flex: 1,
    backgroundColor: '#86be2be3',
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
    backgroundColor: '#a7bdbaff',
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
  container4: {
    flex: 1,
    backgroundColor: '#e7b1eeff',
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
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#355c7d',
    textAlign: 'center',
  },
  Btntexto: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
    marginTop: 2,
    color: '#083257ff',
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
    width: 275,
    height: 750,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#515dc983',
  },
  img02: {
    width: 334,
    height: 750,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6c5b7b75',
  },
  img03: {
    width: 325,
    height: 780,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#355b7d83',
  },
  img04: {
    width: 325,
    height: 790,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#355b7d79',
  },
  TouchOpa01: {
    backgroundColor: '#c4b5afff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#515dc9ff',
  },
  TouchOpa02: {
    backgroundColor: '#cce5ff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#6c5b7b',
  },
  TouchOpa03: {
    backgroundColor: '#b2f7ef',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#355c7d',
  },
  TouchOpa04: {
    backgroundColor: '#b2f7ef',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#355c7d',
  },
  linha: {
    flexDirection: 'row',
  },
});
