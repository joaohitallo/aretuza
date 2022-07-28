import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export function Input({ label, value, name, ...rest }) {
  return (
    <View style={stylesInput.container}>
      <TextInput style={stylesInput.input}
        value={value}
        {...rest}
      />
    </View>
  );
}

const stylesInput = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  input: {
    height: '90%',
    width: '80%',
    backgroundColor: '#FBEBEB',
    borderRadius: 100,
    padding: 10,
    paddingLeft: 20,
  }
});