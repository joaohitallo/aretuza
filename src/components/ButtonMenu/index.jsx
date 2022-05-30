import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';



export function ButtonMenu({ title, onPress, ...rest }) {
  return (
    <TouchableOpacity style={styles.Button} {...rest} onPress={onPress}>
      <Text style={styles.Text}> {title} </Text>
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
    padding: '10px',

    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '20px'
  }
});