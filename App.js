import Toast from 'react-native-toast-message';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes'

export default function App() {
  return (
    <>
      <Routes />
      <Toast />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
