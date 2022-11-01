import React, { useState } from 'react';
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground, 
    Animated } from 'react-native'
import { TextInput, Button, RadioButton } from 'react-native-paper'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'



export default function WhoYA() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('Cliente');
  const [value, setValue] = useState('Cliente');

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

      <RadioButton
          style={styles.radioButton}
          text="Cliente"
          value='Cliente'
          status={ checked === 'Cliente' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Cliente')}
      />
      <Text style={{ color:"white" }}>Cliente</Text>
      <RadioButton
          data = {"Musico"}
          value="Musico"
          status={ checked === 'Musico' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Musico')}
      />

        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            <RadioButton.Item label="First item" color='white' value="Cliente" />
            <RadioButton.Item label="Second item" value="Musico" />
        </RadioButton.Group>

      </Animatable.View>

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
    radioButton:{
      textDecorationColor: "white",
      
    }
  })