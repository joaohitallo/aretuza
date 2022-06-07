import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Input } from '../../components/Input'
import { ButtonVoltar } from '../../components/ButtonVoltar';

export function ListProduct({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonVoltar > </ButtonVoltar>
      <Text style={styles.title}>Estoque</Text>
      <View style={styles.header}>
        <Input placeholder={'Pesquisar'} />
        <View style={styles.barra}> </View>
      </View>
      <View style={styles.productList}>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barra: {
    marginTop: 20,
    backgroundColor: '#A2A2A2',
    width: '80%',
    height: 2
  }
});