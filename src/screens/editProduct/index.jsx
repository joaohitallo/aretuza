import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Masks } from 'react-native-mask-input';

import Toast from 'react-native-toast-message';

import { Input } from '../../components/Input'
import { ButtonRed } from '../../components/ButtonRed'
import { ButtonVoltarWhite } from '../../components/ButtonVoltarWhite'

export function EditProduct({ navigation, route }) {
  const [nome, setNome] = useState(route.params.item.nome)
  const [valor, setValor] = useState(route.params.item.valor)
  const [quantidade, setQuantidade] = useState(route.params.item.quantidade)
  const [validade, setValidade] = useState(route.params.item.validade)
  const [selectedImage, setSelectedImage] = React.useState({ localUri: route.params.item.image });

  const [mds, setMds] = useState('')


  var product = []

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
    console.log(JSON.stringify(selectedImage));
  };

  const aux = 'ListProduct'
  async function handleEditProduct(id1) {
    await AsyncStorage.getItem('product', (err, item) => {
      if (item) {
        const aux = (JSON.parse(item))
        product = aux.filter(item =>
          item.id !== id1)
      }
    });

    await AsyncStorage.setItem('product', JSON.stringify(product))
    const id = uuid.v4();
    const newProduct = {
      id,
      nome,
      valor,
      quantidade,
      validade,
      image: selectedImage.localUri
    }

    try {
      await AsyncStorage.getItem('product', (err, item) => {
        if (item) {
          setMds(item);
          let oldData = JSON.parse(item)


          const aux = [...oldData, newProduct]

          AsyncStorage.setItem('product', JSON.stringify(aux))
        }
        else {
          const aux = [newProduct]
          AsyncStorage.setItem('product', JSON.stringify(aux))
        }
      });
      Toast.show({
        type: 'success',
        text1: 'Produto Editado',
        text2: 'O produto foi editado com sucesso 👋'
      });
      navigation.navigate('ListProduct')
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  return (
    <View style={styles.container}>
      <ButtonVoltarWhite />
      <View style={styles.content}>
        <Text style={styles.title}>Editar Produto</Text>
        <View style={styles.contentImage}>
          {!selectedImage ? (<TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>Enviar foto</Text>
          </TouchableOpacity>) : (
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
          )}
        </View>
        <Input
          placeholder="Nome"
          onChangeText={setNome}
          value={nome}
        />
        <Input
          placeholder="Valor"
          onChangeText={setValor}
          value={valor}
          keyboardType='numeric'
          mask={Masks.BRL_CURRENCY}
        />
        <Input
          placeholder="Quantidade"
          onChangeText={setQuantidade}
          keyboardType='numeric'
          value={quantidade}
        />
        <Input
          placeholder="Data de Validade"
          onChangeText={setValidade}
          keyboardType='numeric'
          value={validade}
          mask={Masks.DATE_DDMMYYYY}
        />
        <ButtonRed title='Editar' onPress={() => handleEditProduct(route.params.item.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0E11',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    //alignContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: '87%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',

  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "contain",

  },
  contentImage: {
    marginBottom: 20
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
});