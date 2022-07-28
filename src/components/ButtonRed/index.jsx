import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';



export function ButtonRed({ title, onPress, ...rest }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} {...rest} onPress={onPress}>
        <Text style={styles.Text}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  Button: {

    height: '100%',
    width: '80%',
    backgroundColor: '#CD3F35',
    borderRadius: 100,
    padding: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
  }
});