import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';



export function ButtonMenu({ title, image, onPress, ...rest }) {
  return (
    <TouchableOpacity style={styles.Button} {...rest} onPress={onPress}>
      <Image style={styles.Image} source={image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    margin: 20,
    height: 150,
    width: 150,
    backgroundColor: '#0D0E11',
    borderRadius: 20,
    padding: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 100,
    width: 100,
  }
});