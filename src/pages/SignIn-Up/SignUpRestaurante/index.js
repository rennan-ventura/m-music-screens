import React from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function SignUpRestaurante() {
  const navigation = useNavigation();
 return (
   <View  style={styles.container}>
      
    <View style={styles.containerLogo}>
    <Button icon="arrow-u-left-top"
     style={styles.buttonVoltar}
     onPress={ () => navigation.navigate('WhoYA')}/>
    <Animatable.Image
          animation="fadeIn"
          source={require('../../assets/logo.png')}
          style={styles.Image}
          resizeMode='contain'
          alignSelf='center'
        />
      
    </View>
    <View style={styles.containerWelcome}>

      <Animatable.Text style={styles.textoWelcome} animation='fadeInLeft' >Bem-Vindo(a)</Animatable.Text>

    </View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <TextInput style={styles.textInput1}
        placeholder="Digite seu nome..."
        mode='outlined'
        label="Nome"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TextInput style={styles.textInput1}
        placeholder="Digite seu email..."
        mode='outlined'
        label="Email"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TextInput style={styles.textInput1}
        placeholder="Digite uma senha..."
        mode='outlined'
        label="Senha"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TextInput style={styles.textInput1}
        placeholder="Confirme sua senha..."
        mode='outlined'
        label="Confirmar senha"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TextInput style={styles.textInput1}
        placeholder="Digite sua data de nascimento..."
        mode='outlined'
        label="Data de nascimento"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#3D3778'
  },
  Image:{
     width: '100%',
     alignSelf: 'center',
  },
  containerForm:{
    backgroundColor: 'transparent',
    flex: 5,
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
  textInput1: {
    marginTop: 20,
    backgroundColor: '#1f1f1f',
  },
  containerBack: {
    flex: 1,
    resizeMode: "cover"
  },
  buttonVoltar:{
    alignSelf: 'baseline',
    alignItems: 'center',
    marginTop: 5,
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
  }

})