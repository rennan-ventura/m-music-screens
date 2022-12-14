import React, { useState, useEffect } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import QRCode  from 'react-native-qrcode-svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function HomeMusico() {
  const [shouldShow, setShouldShow] = useState(false)
  const [shouldShowButtom, setShouldShowButtom] = useState(false)
  const [qrValue, setQrValue] = useState('')
  const navigation = useNavigation();

  function handleVisibility(){
    setShouldShow(true);
    setShouldShowButtom(true);
  }

  function handlerSignOut(){
    AsyncStorage.removeItem("MMUSIC-TOKEN");
    navigation.navigate('Welcome');
  }

  useEffect(() => {
    AsyncStorage.getItem("MMUSIC-UUID").then((id) => {
      setQrValue(id)
    })
  }, [])

 return (
  <View  style={styles.container}>
      
  <View style={styles.containerLogo}>
  <Button icon="logout"
   style={styles.buttonVoltar}
   onPress={handlerSignOut}/>
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
                      onPress={handleVisibility}>
      <Text style={styles.buttonText} >Gerar QrCode
      </Text>
    </TouchableOpacity>
    <View style={styles.qrcode}>

      {
        shouldShow && (
          <QRCode
            value={qrValue ? qrValue : 'https://www.google.com.br'}
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
      {
        shouldShowButtom && (
          <TouchableOpacity 
            style={styles.buttonPedido}
            onPress={() => navigation.navigate('ListaPedido')}
          >
                <Text style={styles.buttonText} >Ver pedidos</Text>
          </TouchableOpacity>
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
    alignItems: 'center'
  },
  qrcode: {
    marginTop: 70,
    alignSelf: 'center'
  },
  buttonPedido:{
    backgroundColor: '#3D3778',
    width: 200,
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },


})