import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Input } from '../../components/Input'
import { ButtonRed } from '../../components/ButtonRed'

import logo from '../../assets/logo.png'

export function SignIn({ navigation }) {

  function handleLogin() {

    navigation.navigate('Home')

  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.content}>

        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />
        <ButtonRed title='Entrar' onPress={handleLogin} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0E11',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    //paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  logo: {
    position: 'absolute',
    top: 100,
    height: 59,
    width: 133
  }
});