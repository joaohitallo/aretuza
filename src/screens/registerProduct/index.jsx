import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Masks } from 'react-native-mask-input';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';



import { Input } from '../../components/Input'
import { ButtonRed } from '../../components/ButtonRed'
import { ButtonVoltarWhite } from '../../components/ButtonVoltarWhite'

const schema = yup.object().shape({
  nome: yup
    .string()
    .required('O nome não pode ser vazio'),
  valor: yup
    .string()
    .required('O valor não pode ser vazio'),
  quantidade: yup
    .number()
    .required('A quantidade não pode ser vazia'),
  validade: yup
    .string()
    .required('A validade não pode ser vazia')
    .min(8, 'A data deve conter 8 dígitos'),

})

export function RegisterProduct() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [selectedImage, setSelectedImage] = React.useState(null);

  const navigation = useNavigation();



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



  async function onSubmit(data) {

    const newProduct = {
      id: uuid.v4(),
      nome: data.nome,
      valor: data.valor,
      quantidade: data.quantidade,
      validade: data.validade,
      image: selectedImage.localUri
    }

    try {
      await AsyncStorage.getItem('product', (err, item) => {
        if (item) {
          let oldData = JSON.parse(item)
          const aux = [...oldData, newProduct]
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
      Toast.show({
        type: 'error',
        text1: 'Erro ao cadastrar produto',
        text2: `${error}`
      });
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
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Nome do Produto"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.nome}
            />)}
          name="nome"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Preço"
              keyboardType='numeric'
              mask={Masks.BRL_CURRENCY}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.valor}
            />)}
          name="valor"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Quantidade"
              keyboardType='numeric'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.quantidade}
            />)}
          name="quantidade"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Data de validade"
              mask={Masks.DATE_DDMMYYYY}
              onBlur={onBlur}
              keyboardType='numeric'
              onChangeText={onChange}
              value={value}
              error={errors?.validade}
            />)}
          name="validade"
        />
        <ButtonRed title='Cadastrar' onPress={handleSubmit(onSubmit)} />
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