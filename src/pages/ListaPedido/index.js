import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  SafeAreaView,
  Alert
  } from 'react-native'
import { TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import api from '../../service/api';
import userService from '../../service/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function ListaPedido() {
  const navigation = useNavigation();
  const [pedidos, setPedidos] = useState([]);
  const [token, setToken] = useState("");
  const [id, setId] = useState("");


  function handleToken(){
    console.log("entrou")
    let userData = {
      id: id,
      token: token
    }
    userService.listOrder(userData)
    .then((response) => {
      setPedidos(response.data.listOfOrders)
      console.log(response.data.listOfOrders)
    })
    .catch((error) => {
      console.log(error)
      Alert.alert("sem musicas")
    }) 
  }

  useEffect(() => {
    AsyncStorage.getItem("MMUSIC-TOKEN").then((token) => {
      setToken(token)
      console.log(token)
    })
    AsyncStorage.getItem("MMUSIC-UUID").then((id) => {
      setId(id)
      console.log(id)
    })
  }, [])
  

  const show = async () => {
    try {
        handleToken();
    } catch (error) {
        console.log(error)
    }
  } 


 return (
   <SafeAreaView  style={styles.container}>
      
    <View style={styles.containerLogo}>
    <Button icon="arrow-u-left-top"
     style={styles.buttonVoltar}
     onPress={ () => navigation.navigate('HomeMusico')}/>
    <Animatable.Image
          animation="fadeIn"
          source={require('../../assets/logo.png')}
          style={styles.Image}
          resizeMode='contain'
          alignSelf='center'
        />
    </View>

    <View style={styles.containerWelcome}>
        <TouchableOpacity onPress={show}>
            <Animatable.Text style={styles.textoWelcome} animation='fadeInLeft' >Aqui estão seus pedidos:</Animatable.Text>
        </TouchableOpacity>
    </View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        
        <FlatList
        data={pedidos}
        keyExtractor={ item => item.id}
        renderItem={({item}) => <ListItem data={item}  />}
        />


      
    </Animatable.View>
   </SafeAreaView>  
    
  );
}

function ListItem({ data }){
  const [token, setToken] = useState('')
  useEffect(() => {
    AsyncStorage.getItem("MMUSIC-TOKEN").then((token) => {
      setToken(token)
    })
  }, [])
  

  function updateStatus(){
    console.log(data.id)
    let orderData = {
        token: token,
        id: data.id
    }
    userService.changeStatusOrder(orderData)
    .then((response) => {
      console.log("foi?")
    })
    .catch((error) => {
      console.log(error)
    })
  }

    return (
       <TouchableOpacity onLongPress={updateStatus} >
           <View style={styles.containerItemList}>
                   <Text style={styles.textItem} >Musica: {data.description}</Text>
           </View>
       </TouchableOpacity>
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
  buttonVoltar:{
    alignSelf: 'baseline',
    alignItems: 'center',
    marginTop: 20,
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
    marginBottom: 15
  },
  linha: {
    heigh: 7,
    backgroundColor: 'red',
    width: 200
  },
  containerItemList: {
    height: 100,
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: '#FFB052',
    marginTop: 10,
    borderRadius: 25,
  },
    textItem :{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})