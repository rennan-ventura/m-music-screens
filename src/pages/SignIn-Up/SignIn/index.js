
import React, {useState} from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground} from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

const schema = yup.object({
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha")
})


export default function SignIn() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)

  })

  function handleSignIn(){
    navigation.navigate('HomeCliente')
  }

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
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={styles.textInput1}
            placeholder="Digite um email..."
            onChangeText={onChange}
            onblur={onBlur}
            value={value}
            mode='outlined'
            label="Email"
            textColor='white'
            outlineColor='#fff'
            activeOutlineColor='#3D3778'
          />
        )}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

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
          />
        )}
      />
      {errors.password && <Text style={styles.labelError} >{errors.password?.message}</Text>}

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit(handleSignIn)}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonRegister}
      onPress={ () => navigation.navigate('WhoYA')}
      >
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
  }

})