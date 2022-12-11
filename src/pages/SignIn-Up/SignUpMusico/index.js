import React, { useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert 
  } from 'react-native'
import { TextInput, Button, ActivityIndicator} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as Animatable from 'react-native-animatable'
import { useSelector } from 'react-redux'
import userService from '../../../service/UserService';

const schema = yup.object({
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha"),
  username: yup.string().required("digite um username..."),
  passwordConfirm: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Confirme a senha...")
})

export default function SignUpMusico() {
  const status = useSelector( state => state.statusContent )
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [isLoading, setLoading] = useState(false)

  function handleSignUp(data){
    if (data.password === data.passwordConfirm){
      setLoading(true);
      let userData = {
        email: data.email,
        username: data.username,
        password: data.password,
        status: status
      }
      userService.signup(userData)
      .then((response) => {
        setLoading(false);
        console.log(response.data)
        navigation.navigate('SignIn')
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        Alert.alert("Ops", "Usuário já existe")
      }) 
      console.log(userData)
    } else{
      Alert.alert("Erro", "as senhas não batem")
    }
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

      <Animatable.Text style={styles.textoWelcome} animation='fadeInLeft' >Bem-Vindo(a)</Animatable.Text>

    </View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>


    <Controller
      control={control}
      name="username"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput 
            style={styles.textInput1}
            placeholder="Digite um username..."
            onChangeText={onChange}
            onblur={onBlur}
            value={value}
            mode='outlined'
            label="username"
            textColor='white'
            outlineColor='#fff'
            activeOutlineColor='#FFB052'
            placeholderTextColor='white'
          />
        )}
      />
      {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

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
            activeOutlineColor='#FFB052'
            placeholderTextColor='white'
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
            activeOutlineColor='#FFB052'
            placeholderTextColor='white'
            secureTextEntry={true}
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
            activeOutlineColor='#FFB052'
            placeholderTextColor='white'
            secureTextEntry={true}
          />
        )}
      />
      {errors.passwordConfirm && <Text style={styles.labelError}>{errors.passwordConfirm?.message}</Text>}

      { isLoading && 
        <ActivityIndicator 
        animating={true} 
        color={'#3D3778'} 
        style={styles.activityInd}
        size={'large'}
        />
      }

      { !isLoading &&
        <TouchableOpacity style={styles.button}
                          onPress={handleSubmit(handleSignUp)}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      }

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
    backgroundColor: '#FFB052',
    width: '60%',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  textInput1: {
    marginTop: 25,
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
  },
  activityInd: {
    marginTop: 10
  }
})