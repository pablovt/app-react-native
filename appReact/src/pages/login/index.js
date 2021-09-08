import React, {useState, useEffect} from 'react';
import {  
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Animated,
  Keyboard  } from 'react-native';


export default function App(){

  const [offset] = useState( new Animated.ValueXY({x: 0, y:95})); //poderia ter duas variaveis, mas o ValueXY possibilita a unificação

  const [opacity] = useState( new Animated.Value(0));

  const [logo] = useState(new Animated.ValueXY({x: 130, y:170}));

  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow); //funciona quando o teclado estiver aberto
    keyboardDidHideListener = Keyboard.addListener('keyboardDidShow', keyboardDidHide); //funciona quando o teclado estiver fechado

    Animated.parallel([
      Animated.spring(offset.y, { //animação que sobe
        toValue: 0,
        speed: 4, //velocidade da animação
        useNativeDriver: true,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
    
  }, []);

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,

      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
      })
    ]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 170,
        duration: 100,
      })
    ]).start();
  }

  return(
  <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
      <Animated.Image
      style={{
        width: logo.x,
        height: logo.y,
      }}
      source={require('../../imagens/logo.png')}
      />
    </View>
  <Animated.View 
    style={[
      styles.container,
      {
        opacity: opacity,
        transform: [{translateY: offset.y}] //valor é dinamico
      }
    ]}
    >

    <TextInput style={styles.input}
    placeholder="Email"
    autoCorrect={false}
    onChangeText={()=>{}}
    />

    <TextInput style={styles.input} //manteve-se o mesmo estilo
    placeholder="Senha"
    autoCorrect={false}
    onChangeText={()=>{}}
    />

    <TouchableOpacity style={styles.botaoEntrar}>
      <Text style={styles.botaoEntrarText}>Acessar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botaoCriarConta}>
      <Text style={styles.botaoCriarContaText}>Criar conta</Text>
    </TouchableOpacity>

  </Animated.View>
  </KeyboardAvoidingView>);
}

//Aqui vai as customizações/estilos desta página
const styles = StyleSheet.create({
  background: {
    flex:1, //pega o tamanho inteiro da tela
    alignItems: 'center', //centraliza
    justifyContent: 'center',
    backgroundColor: '#6495ED'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center'
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 18,
    borderRadius:7,
    padding: 10 //espaçamento entre campos
  },
  botaoEntrar:{
    backgroundColor: '#FF7F50',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7 //arredondamento do botao
  },
  botaoEntrarText:{
    color: '#FFF',
    fontSize: 18
  },
  botaoCriarConta:{
    marginTop: 10
  },
  botaoCriarContaText: {
    color: '#FFF'
  }
});