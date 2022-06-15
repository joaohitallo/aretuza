import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Input } from '../../components/Input'
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { CardProduct } from '../../components/CardProduct'

export function ListProduct({ navigation }) {

  const [products, setProducts] = useState()

  const [modalVisible, setModalVisible] = useState(false)

  var product = []


  useEffect(() => {
    getMyStringValue()
    setModalVisible(false)
  }, [])



  async function getMyStringValue() {
    try {
      await AsyncStorage.getItem('product', (err, item) => {
        if (item) {
          const aux = (JSON.parse(item))

          for (const key in aux) {

            let ta = aux[key]

            product.push(ta)

          }
          let aux2 = [...product]
          product = product.filter((element, index) => index > 0);
          //console.log(product);
        }
      });
    } catch (e) {
      console.log(e);
    }
    setProducts(product)
    //console.log(products)
  }

  function handleOpenModal(item) {
    console.log('aki');
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <Text> iaia</Text>
      </Modal>
      <ButtonVoltar ></ButtonVoltar>
      <View style={styles.header}>
        <Text style={styles.title}>Estoque</Text>
        <Input style={styles.input} placeholder='Pesquisar' />
        <View style={styles.barra}></View>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardProduct item={item} onPres={() => handleOpenModal()} style={styles.product} />}
      />
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  },
  touch: {
    height: 30,
    width: 30,
    backgroundColor: 'black'
  }

});