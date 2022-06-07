import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export function ButtonVoltar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <AntDesign name="arrowleft" size={34} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});