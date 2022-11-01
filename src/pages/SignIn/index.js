
import React from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  triangleCornerTopRight, 
  TriangleCorner , 
  ImageBackground} from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  const navigation = useNavigation();
 return (
   <View  style={styles.container}>
    <ImageBackground
      source={require('../../assets/fundo.png')}
      style={styles.containerBack}
    >
      
    <View style={styles.containerLogo}>
    <Button icon="arrow-u-left-top"
     style={styles.buttonVoltar}
     onPress={ () => navigation.navigate('Welcome')}/>
    <Animatable.Image
          animation="fadeIn"
          source={require('../../assets/Logo3.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
          alignSelf='center'
        />
    </View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TextInput style={styles.textInput1}
        placeholder="Digite um email..."
        mode='outlined'
        label="Email"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TextInput style={styles.textInput2}
        placeholder="Digite sua senha..."
        mode='outlined'
        label="Senha"
        textColor='white'
        outlineColor='#fff'
        activeOutlineColor='#3D3778'
      />

      <TouchableOpacity style={styles.button}>
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
  /*triangle:{
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 125,
    borderTopWidth: 110,
    borderRightColor: "transparent",
    borderTopColor: "#3D3778",
    transform: [{rotate: "90deg"}],
    alignSelf: 'flex-end'
    <Animatable.View style={styles.triangle} animation="" />
  }, */
  containerBack: {
    flex: 1,
    resizeMode: "cover"
  },
  buttonVoltar:{
    alignSelf: 'baseline',
    alignItems: 'center'
    
  }

})