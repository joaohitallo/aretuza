import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function ButtonVoltarWhite(color) {
  const navigation = useNavigation();

  function ButtonVoltar() {
    navigation.goBack()

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ButtonVoltar}>
        <AntDesign name="arrowleft" size={34} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 20,
  },
});