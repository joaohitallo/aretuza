import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';



export function ButtonMenu({ title, image, onPress, text, ...rest }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} {...rest} onPress={onPress}>
        <Image style={styles.Image} source={image} />
      </TouchableOpacity>
      <Text style={styles.Text} >{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  Text: {
    color: '#CD3F35',
    fontWeight: 'bold'
  },
  Button: {
    margin: 10,
    height: 150,
    width: 150,
    backgroundColor: '#0D0E11',
    borderRadius: 20,
    padding: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 80,
    width: 80,
  }
});