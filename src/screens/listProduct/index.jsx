import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

import { Input } from '../../components/Input'
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { CardProduct } from '../../components/CardProduct'

export function ListProduct({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ButtonVoltar ></ButtonVoltar>
      <View style={styles.header}>
        <Text style={styles.title}>Estoque</Text>
        <Input style={styles.input} placeholder='Pesquisar' />
        <View style={styles.barra}></View>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.contentCard}>
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
          <CardProduct style={styles.product} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    height: 120
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: '#FBEBEB',
    borderRadius: 100,
    padding: 4,
    paddingLeft: 20,
  },
  title: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18
  },
  barra: {
    marginTop: 20,
    backgroundColor: '#A2A2A2',
    width: '80%',
    height: 2
  },
  scroll: {
    width: '100%',
  },
  contentCard: {
    alignItems: 'center',
  },
  product: {
    width: 100,
    backgroundColor: 'red'
  }

});