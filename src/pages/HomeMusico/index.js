import React, { useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import QRCode  from 'react-native-qrcode-svg'
 
export default function HomeMusico() {
  const [shouldShow, setShouldShow] = useState(false)
  const [qrValue, setQrValue] = useState('')
  const navigation = useNavigation();



 return (
  <View  style={styles.container}>
      
  <View style={styles.containerLogo}>
  <Button icon="arrow-u-left-top"
   style={styles.buttonVoltar}
   onPress={ () => navigation.navigate('SignIn')}/>
  <Animatable.Image
        animation="fadeIn"
        source={require('../../assets/logo.png')} 
        style={styles.Image}
        resizeMode='contain'
        alignSelf='center'
      />
    
  </View>
  <View style={styles.containerWelcome}>

    <Animatable.Text style={styles.textoWelcome} animation="fadeInLeft" >Começe a tocar</Animatable.Text>

  </View>
  <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <TouchableOpacity style={styles.button}
                      onPress={() => setShouldShow(true)}>
      <Text style={styles.buttonText} >Gerar QrCode
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}
                      onPress={() => navigation.navigate('')}>
      <Text style={styles.buttonText} >Escanear QrCode
      </Text>
    </TouchableOpacity>
    <View style={styles.qrcode}>

      {
        shouldShow && (
          <QRCode
            value={qrValue ? qrValue : 'http://www.google.com'}
            size={250}
            color="white"
            backgroundColor='transparent'
            logoSize={15}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="transparent"
          />
        )

      }
    

    </View>

    


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
  qrcode: {
    marginTop: 70,
    alignSelf: 'center'
  }


})