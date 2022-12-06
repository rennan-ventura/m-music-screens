import React, { useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Modal,
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import { useDispatch } from 'react-redux'

import Scanner from '../../components/Scanner'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeCliente() {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [qrCodeContent, setQrCodeContent] = useState("");
  const navigation = useNavigation();

  const onCodeScanned = (data) => {
      setQrCodeContent(data); 
      setModalVisible(false);
      navigation.navigate('PedidoForms');
      dispatch({ type: 'CHANGEQR', value: data });
  }
  function handlerSignOut(){
    AsyncStorage.removeItem("MMUSIC-TOKEN");
    AsyncStorage.removeItem("MMUSIC-TOKENTYPE");
    AsyncStorage.removeItem("MMUSIC-UUID");
    AsyncStorage.removeItem("MMUSIC-USERNAME");
    navigation.navigate('Welcome');
  }

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

    <Animatable.Text style={styles.textoWelcome} animation="fadeInLeft" >Começe a solicitar: </Animatable.Text>

  </View>
  <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <TouchableOpacity style={styles.button}
                      onPress={() => setModalVisible(true)}>
      <Text style={styles.buttonText} >Escanear QrCode
      </Text>
    </TouchableOpacity>

    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modal}>
        <Scanner onCodeScanned={onCodeScanned} />
        <TouchableOpacity 
          style={styles.buttonModal}
          onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity> 
      </View>
    </Modal>

    <StatusBar style='auto'/>

  


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
    flex: 3,
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
    marginTop: 35,
  },
  textoWelcome: {
    fontSize: 25,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  containerWelcome: {
    height: 60,
  },
  modal: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#1f1f1f",
  },
  buttonModal: {
    backgroundColor: '#3D3778',
    width: '80%',
    borderRadius: 15,
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }


})