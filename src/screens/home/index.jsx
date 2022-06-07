import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



import logo from '../../assets/logo.png'
import EstoqueList from '../../assets/EstoqueList.svg'
import CadastrarProd from '../../assets/newProduct.svg'
import EfetuarVend from '../../assets/venda.svg'

import { ButtonMenu } from '../../components/ButtonMenu'

export function Home({ navigation }) {

  function handleVisualizarEstoque() {
    console.log('aki');
    navigation.navigate('ListProduct')
  }

  function handleCadastrarProduto() {
    navigation.navigate('CadastrarProduto')
  }

  function handleEfetuarVenda() {
    navigation.navigate('EfetuarVenda')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.content}>
        <ButtonMenu text={'Visualizar \n estoque'} image={EstoqueList} onPress={handleVisualizarEstoque} />
        <ButtonMenu text={'Cadastrar \n produto'} image={CadastrarProd} />
        <ButtonMenu text={'Efetuar \n venda'} image={EfetuarVend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0E11',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingTop: 80,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    alignContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: '80%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  logo: {
    position: 'absolute',
    top: 80,
    height: 59,
    width: 133
  }
});