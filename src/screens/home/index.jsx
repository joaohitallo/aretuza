import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



import logo from '../../assets/logo.svg'

import { ButtonMenu } from '../../components/ButtonMenu'

export function Home({ navigation }) {



  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.content}>
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
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
    paddingTop: '80px',
    padding: '10px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    alignContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: '80%',
    width: '100%',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
  },
  logo: {
    position: 'absolute',
    top: 80,
    height: '59px',
    width: '133px'
  }
});