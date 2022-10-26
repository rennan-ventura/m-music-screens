
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
 return (
   <View  style={styles.container}>
    <View style={styles.containerLogo}>
    <Animatable.Image
          animation="flipInY"
          source={require('../../assets/Logo3.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
    </View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TextInput
        placeholder="Digite um email..."
        mode='outlined'
        label="Email"
        textColor='#fff'
        backgroundColor='#1f1f1f'
        OutlineColor='red'
      />

      <TextInput
        placeholder="Digite sua senha..."
        mode='outlined'
        label="Senha"
        textColor='#fff'
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>

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
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    backgroundColor: '#1f1f1f',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  button:{
    backgroundColor: '#3D3778',
    width: '60%',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText:{
    color: '#a1a1a1'
  }
})