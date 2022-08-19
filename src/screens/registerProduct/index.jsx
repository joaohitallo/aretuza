import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input'
import { ButtonRed } from '../../components/ButtonRed'
import { ButtonVoltarWhite } from '../../components/ButtonVoltarWhite'

export function RegisterProduct() {
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [validade, setValidade] = useState('')
  const [selectedImage, setSelectedImage] = React.useState(null);

  const navigation = useNavigation();
  const [mds, setMds] = useState('')

  var produtc = []

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


  const removeData = async () => {
    await AsyncStorage.removeItem('product');
    console.log('ag');
    try {
      AsyncStorage.getItem('product', (err, item) => {
        if (item) {
          setMds(item);
        }
      });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
    console.log(mds);

  }


  async function handleNewProduct() {

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
          console.log(mds);
          console.log(oldData);
          const aux = [...oldData, newProduct]
          console.log(oldData);
          AsyncStorage.setItem('product', JSON.stringify(aux))
        }
        else {
          const aux = [newProduct]
          AsyncStorage.setItem('product', JSON.stringify(aux))
        }
        Toast.show({
          type: 'success',
          text1: 'Produto Cadastrado',
          text2: 'O produto foi cadastrado com sucesso 👋'
        });
        navigation.goBack()
      });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }


  }

  return (
    <View style={styles.container}>
      <ButtonVoltarWhite />
      <KeyboardAvoidingView style={styles.content}

        scrollEnabled={false}>
        <Text style={styles.title}>Cadastro de Produto</Text>
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
        <Input placeholder="Nome" onChangeText={setNome} value={nome} />
        <Input placeholder="Valor" onChangeText={setValor} value={valor} keyboardType='numeric' />
        <Input placeholder="Quantidade" onChangeText={setQuantidade} keyboardType='numeric' value={quantidade} />
        <Input placeholder="Data de Validade" onChangeText={setValidade} value={validade} />
        <ButtonRed title='Cadastrar' onPress={handleNewProduct} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0E11',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 600,
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