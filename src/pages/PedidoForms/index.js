import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Modal,
  } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import { useSelector } from 'react-redux'

export default function PedidoForms(props) {
  const codeContent = useSelector( state => state.codeContent )
  const navigation = useNavigation();
  

 return (
  <View  style={styles.container}>
      
  <Animatable.View style={styles.containerLogo}
  delay={600}
  animation="fadeIn">
  <Button icon="arrow-u-left-top"
   style={styles.buttonVoltar}
   onPress={ () => navigation.navigate('HomeCliente')}/>
  <Animatable.Image
        
        source={require('../../assets/logo.png')} 
        style={styles.Image}
        resizeMode='contain'
        alignSelf='center'
      />
    
  </Animatable.View>
  <View style={styles.containerWelcome}>

    <Animatable.Text style={styles.textoWelcome} animation="fadeInLeft" >Começe a solicitar</Animatable.Text>

  </View>
  <Animatable.View animation="fadeInUp" style={styles.containerForm}>

      <TextInput style={styles.textInput1}
        placeholder="Digite o nome da musica..."
        mode='outlined'
        label="Musica"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
        placeholderTextColor='white'
      />

      <TextInput style={styles.textInput1}
        placeholder="Digite o autor da musica..."
        mode='outlined'
        label="Autor"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
        placeholderTextColor='white'
      />


    <TouchableOpacity style={styles.button}
                      onPress={() => setModalVisible(true)}>
      <Text style={styles.buttonText} >Fazer pedido
      </Text>
    </TouchableOpacity>

    <Text>{codeContent}</Text>
  

  </Animatable.View>
 </View> 
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  containerLogo:{
    flex:1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#3D3778'
  },
  Image:{
     width: '80%',
     alignSelf: 'center',
  },
  containerForm:{
    backgroundColor: 'transparent',
    flex: 3.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  button:{
    backgroundColor: '#3D3778',
    width: '80%',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonVoltar:{
    alignSelf: 'baseline',
    alignItems: 'center',
    marginTop: 60,
  },
  textoWelcome: {
    fontSize: 25,
    color: 'white',
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  containerWelcome: {
    height: 60,
  },
  modal: {
    height: '50%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#1f1f1f",
  },
  textInput1: {
    marginTop: 25,
    backgroundColor: '#1f1f1f',
  },


})