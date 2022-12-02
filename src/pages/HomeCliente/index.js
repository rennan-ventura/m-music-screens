import React, { useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import QRCodeScanner from 'react-native-qrcode-scanner'

export default function HomeCliente() {
  const [qrCodeContent, setQrCodeContent] = useState("");
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

    <Animatable.Text style={styles.textoWelcome} animation="fadeInLeft" >Começe a solicitar</Animatable.Text>

  </View>
  <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <TouchableOpacity style={styles.button}
                      onPress={() => navigation.navigate('HomeCliente')}>
      <Text style={styles.buttonText} >Escanear QrCode
      </Text>
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
    width: '80%',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 15,
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