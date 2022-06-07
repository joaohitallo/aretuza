import React from 'react';
import { View, StyleSheet, Text } from 'react-native';



export function CardProduct() {
  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.content}>
        <View style={styles.linha} >
          <Text style={styles.Text} >Nome: </Text>
          <Text style={styles.Text} >a</Text>
        </View>
        <View style={styles.linha} >
          <Text style={styles.Text} >Quantidade:</Text>
        </View>
        <View style={styles.linha} >
          <Text style={styles.Text} >Valor</Text>
          <Text style={styles.Text} >a</Text>
        </View>
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
  }
});