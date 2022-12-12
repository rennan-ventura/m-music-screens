
import React, { useState, useEffect } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground,
  Alert } from 'react-native'
import { TextInput, Button, ActivityIndicator} from 'react-native-paper'

import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import userService from '../../../service/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = yup.object({
  username: yup.string().min(4, "O username deve ter pelo menos 4 digitos").required("Informe seu username..."),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha")
});

export default function SignIn() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [isLoading, setLoading] = useState(false)
 // const [isLoadingToken, setLoadingToken] = useState(false)

  function handleSignIn(data){
    setLoading(true);
    let userData = {
      username: data.username,
      password: data.password
    }
    userService.signin(userData)
    .then((response) => {
      setLoading(false);
      if(response.data.status === 'REQUESTER')
      {
      navigation.navigate('HomeCliente')
      }
      if(response.data.status === 'ATTENDANT')
      {
      navigation.navigate('HomeMusico')
      }

    })
    .catch((error) => {
      setLoading(false);
      console.log(error)
      Alert.alert("Ops", "Username ou senha inválidos")
    }) 
  }
  
  /*
  function SignInWithToken(token){
    setLoadingToken(true);
    let userData = {
      token: token,
    }
    userService.signinWithToken(userData)
    .then((response) => {
      setLoadingToken(false);
      console.log(response.data)
      if(response.data.status === 'REQUESTER')
      {
      navigation.navigate('HomeCliente')
      }
      if(response.data.status === 'ATTENDANT')
      {
      navigation.navigate('HomeMusico')
      }

    })
    .catch((error) => {
      setLoadingToken(false);
    }) 
    console.log(userData)
  }*/

  useEffect(() => {
    AsyncStorage.getItem("MMUSIC-TOKEN").then((token) => {
      
    })
  }, []) 

  return (
   <View  style={styles.container}>
    <ImageBackground
      source={require('../../../assets/fundo.png')}
      style={styles.containerBack}
    >
      
      <View style={styles.containerLogo}>
      <Button icon="arrow-u-left-top"
      style={styles.buttonVoltar}
      onPress={ () => navigation.navigate('Welcome')}/>
      <Animatable.Image
            animation="fadeIn"
            source={require('../../../assets/Logo3.png')}
            style={{ width: '100%' }}
            resizeMode='contain'
            alignSelf='center'
          />
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              style={styles.textInput1}
              placeholder="Digite seu username..."
              onChangeText={onChange}
              onblur={onBlur}
              value={value}
              mode='outlined'
              label="Username"
              textColor='white'
              outlineColor='#fff'
              activeOutlineColor='#3D3778'
              underlineColor='#fff'
              placeholderTextColor="white"
              activeUnderlineColor='white'
            />
          )}
        />
        {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.textInput2}
              placeholder="Digite sua senha..."
              onChangeText={onChange}
              onblur={onBlur}
              value={value}
              mode='outlined'
              label="Senha"
              textColor='white'
              outlineColor='#fff'
              activeOutlineColor='#3D3778'
              secureTextEntry={true}
              placeholderTextColor="white"
              
            />
          )}
        />
        {errors.password && <Text style={styles.labelError} >{errors.password?.message}</Text>}

        { isLoading && 
          <ActivityIndicator
          animating={true} 
          color={'#3D3778'} 
          style={styles.activityInd}
          size={'large'}
          />
        }

        { !isLoading &&
          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity 
        style={styles.buttonRegister}
        onPress={ () => navigation.navigate('WhoYA')}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    </ImageBackground>
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
    
  },
  containerForm:{
    backgroundColor: 'transparent',
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
  },
  textInput1: {
    backgroundColor: '#1f1f1f',

    
  },
  textInput2: {
    marginTop: 15,
    backgroundColor: '#1f1f1f',
  },
  containerBack: {
    flex: 1,
    resizeMode: "cover"
  },
  buttonVoltar:{
    alignSelf: 'baseline',
    alignItems: 'center'
    
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8
  },
  activityInd: {
    marginTop: 10
  }
});