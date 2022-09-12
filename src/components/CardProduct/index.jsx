import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';



export function CardProduct({ item, navigation }) {
  const [selectedImage, setSelectedImage] = useState({ localUri: item.image });
  const [FilteredProduct, setFilteredProduct] = useState()

  var product = []

  async function delectProduct(id) {
    await AsyncStorage.getItem('product', (err, item) => {
      if (item) {
        const aux = (JSON.parse(item))
        product = aux.filter(item =>
          item.id !== id)
      }
    });
    await AsyncStorage.setItem('product', JSON.stringify(product))
    Toast.show({
      type: 'success',
      text1: 'Produto Deletado',
      text2: 'O produto foi deletado com sucesso 👋'
    });

  }


  function handleEdit() {
    navigation.navigate('EditProduct', { item: item })
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: selectedImage.localUri }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.linha} >
          <Text style={styles.Text} >Nome: </Text>
          <Text style={styles.Text} >{item.nome}</Text>
        </View>
        <View style={styles.linha} >
          <Text style={styles.Text} >Quantidade:  </Text>
          <Text style={styles.Text} >{item.quantidade}</Text>
        </View>
        <View style={styles.linha} >
          <Text style={styles.Text} >Valor:  </Text>
          <Text style={styles.Text} > {item.valor} </Text>
        </View>
        <View style={styles.linha} >
          <Text style={styles.Text} >Validade:  </Text>
          <Text style={styles.Text} >{item.validade}</Text>
        </View>
      </View>
      <View style={styles.contentButtons} >
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="edit" size={24} color="white" onPress={() => handleEdit()} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="delete-forever" size={24} color="white" onPress={() => delectProduct(item.id)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0E11',
    height: 100,
    width: 300,
    flexDirection: 'row',
    padding: 8,
    borderRadius: 8,
    margin: 5,
  },
  content: {
    justifyContent: 'center',
    padding: 5
  },
  image: {
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    borderRadius: 8
  },
  linha: {

    flexDirection: 'row',
  },
  Text: {
    color: '#A2A2A2',
  },
  contentButtons: {
    position: 'absolute',
    right: 2,
    justifyContent: 'center',
    marginLeft: 10,
    flexDirection: 'column',
    //padding: 20,
  },
  button: {
    margin: 10
  }
});