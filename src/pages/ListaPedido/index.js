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
import { useDispatch } from 'react-redux'



export default function ListaPedido() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [episodes, setEpisodes] = useState([]);
  //const [token, setToken] = useState("");
  const [id, setId] = useState("");


  function handleToken(){
    let userData = {
      id: id
    }
    userService.listOrder(userData)
    .then((response) => {
      setEpisodes(response.date)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
      console.log("O usuario nao existe")
      Alert.alert("O Usuario não existe")
    }) 
    console.log(userData)
  }

  /*
  const solicitar = async () => {
    try {
        const resposta = await api.get("/user");
        console.log(resposta.data);
        setEpisodes(resposta.data);
        console.log(episodes);
    } catch (error) {
        console.log(error)
    }
  } */


  useEffect(() => {
    AsyncStorage.getItem("MMUSIC-TOKEN").then((token) => {
      dispatch({type: 'CHANGETOKEN', value: token })
    })
    AsyncStorage.getItem("MMUSIC-UUID").then((id) => {
      setId(id)
    })
      handleToken;
  }, [])
  

  const show = async () => {
    try {
        console.log(episodes);
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
        data={episodes}
        keyExtractor={ item => item.id}
        renderItem={({item}) => <ListItem data={item} />}
        />


      
    </Animatable.View>
   </SafeAreaView>  
    
  );
}

function ListItem({ data }){

    return (
       <TouchableOpacity>
           <View style={styles.containerItemList}>
                   <Text style={styles.textItem} >nome: {data.name}</Text>
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
    padding: 16
  },
    textItem :{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})