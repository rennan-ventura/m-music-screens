import React from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha"),
  name: yup.string().required("digite um nome..."),
  passwordConfirm: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Confirme a senha..."),
  cnpj: yup.string().min(11, "digite um cnpj").required("Digite um cnpj...")
})

export default function SignUpRestaurante() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)

  })
  function handleSignIn(){
    navigation.navigate('HomeRestaurante')
  }
 return (
   <View  style={styles.container}>
      
    <View style={styles.containerLogo}>
    <Button icon="arrow-u-left-top"
     style={styles.buttonVoltar}
     onPress={ () => navigation.navigate('WhoYA')}/>
    <Animatable.Image
          animation="fadeIn"
          source={require('../../../assets/logo.png')}
          style={styles.Image}
          resizeMode='contain'
          alignSelf='center'
        />
      
    </View>
    <View style={styles.containerWelcome}>

      <Animatable.Text style={styles.textoWelcome} animation='fadeInLeft' >Bem-Vindo</Animatable.Text>

    </View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <Controller
      control={control}
      name="name"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput 
            style={styles.textInput1}
            placeholder="Digite seu nome..."
            onChangeText={onChange}
            onblur={onBlur}
            value={value}
            mode='outlined'
            label="Nome"
            textColor='white'
            outlineColor='#fff'
            activeOutlineColor='#3D3778'
          />
        )}
      />
      {errors.name && <Text style={styles.labelError}>{errors.name?.message}</Text>}

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
          <TextInput style={styles.textInput1}
            placeholder="Digite uma senha..."
            onChangeText={onChange}
            onblur={onBlur}
            value={value}
            mode='outlined'
            label="Senha"
            textColor='white'
            outlineColor='#fff'
            activeOutlineColor='#3D3778'
          />
        )}
      />
      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <Controller
        control={control}
        name="passwordConfirm"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.textInput1}
            placeholder="Confirme sua senha..."
            onChangeText={onChange}
            onblur={onBlur}
            value={value}
            mode='outlined'
            label="Confirmar senha"
            textColor='white'
            outlineColor='#fff'
            activeOutlineColor='#3D3778'
          />
        )}
      />
      {errors.passwordConfirm && <Text style={styles.labelError}>{errors.passwordConfirm?.message}</Text>}

      <Controller
        control={control}
        name="cnpj"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.textInput1}
            placeholder="Digite um CNPJ..."
            onChangeText={onChange}
            onblur={onBlur}
            value={value}
            mode='outlined'
            label="cnpj"
            textColor='white'
            outlineColor='#fff'
            activeOutlineColor='#3D3778'
          />
        )}
      />
      {errors.cnpj && <Text style={styles.labelError}>{errors.cnpj?.message}</Text>}

      <TouchableOpacity style={styles.button}
                        onPress={handleSubmit(handleSignIn)}>
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
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8
  }
})