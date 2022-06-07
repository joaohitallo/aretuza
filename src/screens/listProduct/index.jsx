import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

import { Input } from '../../components/Input'
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { CardProduct } from '../../components/CardProduct'

export function ListProduct({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonVoltar > </ButtonVoltar>
      <Text style={styles.title}>Estoque</Text>
      <View style={styles.header}>
        <Input placeholder={'Pesquisar'} />
        <View style={styles.barra}> </View>
      </View>
      <SafeAreaView style={styles.productList}>
        <CardProduct style={styles.product} />
      </SafeAreaView>
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
  },
  product: {
    width: 100,
    backgroundColor: 'red'
  }

});