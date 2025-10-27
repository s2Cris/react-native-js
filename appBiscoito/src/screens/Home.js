import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  // Estados
  const [textoFrase, setTextoFrase] = useState('~~~~~Sua Sorte Aqui ~~~~~');
  const [img, setImg] = useState(require('../assets/BiscoitoFechado.jpg'));
  const [quebrado, setQuebrado] = useState(false);

  // Array de frases
  const frases = [
    'Quando a fonte secar, que seu desejo de voar seja a chuva que revive o solo.',
    'Liberte-se da expectativa alheia: a liberdade nunca foi dada, e sim conquistada.',
    'Navegue pelas águas de um mar azul — permita-se fluir, permitir-se ser vasto.',
    'Sua herança é sua raiz e seu impulso: olhe para trás, para avançar com mais certeza.',
    'A paciência não significa esperar passivamente — significa cultivar firmeza enquanto o vento muda.',
    'Se eu fosse você, eu me honraria hoje: reconheça o valor que habita em cada pedaço de você.',
    'Quando o medo vier, lembre-se: você tem vontade de voar, mesmo que o chão pareça tremer.',
    'Deus — não um ser distante, mas a força que pulsa no âmago da sua ancestralidade.',
    'Proteja-se como se carregasse uma carranca: firmeza ante as tempestades da vida.',
    'Você não está apenas navegando — está redesenhando o mapa da sua liberdade.',
    'Oração não é apenas palavras ao vento — é instante de escuta, de voltar-se para dentro e reconhecer a luz.',
    'Quando a fonte secar, transforme esse limite em portal: renasça de onde parece ter fim.',
    'Sua coragem é mar, fundo, infinito — atenda ao chamado de voar, mergulhar, emergir.',
    'Não espere que a liberdade venha: vista-a, caminhe-a, torne-a real com cada gesto.',
    'Você é o navio e o mar — o que navega e o que sustenta a navegação.',
    'Na ancestralidade encontra-se o alicerce: olhe para as raízes para crescer mais alto.',
    'Seja a voz do seu Brasil, do seu mundo — não apenas espectador, mas autor da sua cultura, da sua história.',
    'Nesta travessia, lembre-se: não há vento contra para quem tem leme interno, bússola de alma e mar de coragem.',
    'Cada desafio é onda: aprenda a surfar sem perder o equilíbrio da sua essência.',
    'Mesmo nos dias de tempestade, mantenha a carranca erguida — você é guardião da sua própria força.'
  ];

  // Função para quebrar o biscoito
  function quebrarBiscoito() {
    if (quebrado) return;
    setQuebrado(true);
    let num = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[num] + '"');
    setImg(require('../assets/BiscoitoAberto.jpg'));
  }

  function resetBiscoito() {
    setTextoFrase('Frase aqui');
    setImg(require('../assets/BiscoitoFechado.jpg'));
    setQuebrado(false);
  }

  return (

    <View style={estilos.container}>
      <Image source={img} style={estilos.img} />

      <Text style={estilos.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={estilos.botao} onPress={quebrarBiscoito}>
        <Text style={estilos.btnTexto}>Abrir Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao} onPress={resetBiscoito}>
        <Text style={estilos.btnTexto}>Resetar Sorte</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[estilos.botao, { backgroundColor: '#2143b6ff'}]} 
      onPress={() => navigation.navigate('Sobre')}>
        <Text style={estilos.btnTexto}>Ir para Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[estilos.botao, { backgroundColor: '#2143b6ff'}]} 
      onPress={() => navigation.navigate('Integrantes')}>
        <Text style={estilos.btnTexto}>Ir para Integrantes</Text>
      </TouchableOpacity>
    </View>

  );
}

// Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 18,
    color: 'rgba(23, 8, 161, 1)',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 200,
    height: 45,
    backgroundColor: '#345ee7ff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});