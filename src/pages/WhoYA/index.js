import React, { useState } from 'react';
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground, 
    Animated } from 'react-native'
import { TextInput, Button, RadioButton, Checkbox } from 'react-native-paper'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'



export default function WhoYA() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('cliente');

 return (
   <View  style={styles.container}>
    <ImageBackground
      source={require('../../assets/fundo.png')}
      style={styles.imageBackGround}
    
    >

    <View style={styles.containerLogo}>
      <Button icon="arrow-u-left-top"
       style={styles.buttonVoltar}
       onPress={ () => navigation.navigate('SignIn')}
       />
    <Animatable.Image
          delay={600}
          animation="fadeIn"
          source={require('../../assets/Logo3.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
          alignSelf= 'center'
        />
    </View>

    <View style={styles.containerForm}>
        <Animatable.View 
        delay={600}
        style={styles.containerRadio}
        animation="zoomIn"
        duration={1000}
        >

    
    <RadioButton.Item
        style={styles.radioButton1}
        label='Cliente'
        value="cliente"
        status={ checked === 'cliente' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('cliente')}
        color='#3597A6'
      />
      <RadioButton.Item
      style={styles.radioButton2}
        label='Musico'
        value="musico"
        status={ checked === 'musico' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('musico')}
        color='#FFB052'
      />

      </Animatable.View>
      
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => checked === 'cliente' ? navigation.navigate('SignUpCliente') : 
        checked === 'musico' ? navigation.navigate('SignUpMusico') : 
        alert("Por favor selecione uma das opções")} >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

    </View>

    

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
      paddingEnd: '5%',
      alignItems: 'center'
      
    },
    imageBackGround:{
      flex: 1,
      resizeMode: 'cover'
  
    },
    buttonVoltar:{
        alignSelf:'flex-start',
        

    },
    containerRadio:{
        width: 300,
        height: 225,
        backgroundColor: 'transparent',
        paddingStart: '5%',
        paddingEnd: '5%',
        borderColor: '#fff',
        borderRadius:8,
        borderStyle: 'solid',
        borderWidth: 2
    },
    radioButton1:{
        backgroundColor: '#3597A6',
        borderRadius: 10,
        marginTop: 15,
        opacity: 0.5,
    },
    radioButton2:{
        backgroundColor: '#FFB052',
        borderRadius: 10,
        marginTop: 15,
        opacity: 0.5
    },
    radioButton3:{
        backgroundColor: '#3D3778',
        borderRadius: 10,
        marginTop: 15,
        opacity: 0.5
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
  })