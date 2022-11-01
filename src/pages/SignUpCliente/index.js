import React from 'react';
import { View, 
  Text, 
  ImageBackground, 
  StyleSheet,
  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { TextInput, Button} from 'react-native-paper'

import * as Animatable from 'react-native-animatable'

export default function SignUpCliente() {
    const navigation = useNavigation();
 return (
   <View style={StyleSheet.container}>

    <ImageBackground
      source={require('../../assets/fundoCadastro.png')}
      style={styles.containerBack}
    >
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}

      >
       <Text style={styles.message}>Bem-vindo cliente</Text>  
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
        >



      </Animatable.View>

    </ImageBackground>
    
  

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1f1f1f'
  },
  containerHeader:{
    flex:2,
    marginTop: '14%',
    marginButtom: '8%',
    paddingStart: '5%', 
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm:{
    backgroundColor: 'transparent',
    flex: 1,

  },
  containerBack: {
    flex: 1,
    resizeMode: "cover"
  },

})