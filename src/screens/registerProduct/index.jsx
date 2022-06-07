import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Input } from '../../components/Input'
import { ButtonRed } from '../../components/ButtonRed'

export function RegisterProduct() {
  const [selectedImage, setSelectedImage] = React.useState(null);

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
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
        <Input placeholder="Nome" />
        <Input placeholder="Valor" />
        <Input placeholder="Quantidade" />
        <Input placeholder="Data de Validade" />
        <ButtonRed title='Cadastrar' />
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
    resizeMode: "contain"
  }
});