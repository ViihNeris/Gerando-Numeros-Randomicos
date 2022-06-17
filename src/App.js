import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

const IMG =
  'https://www.pngkey.com/png/full/119-1198181_nuvem-fofa-cartoon.png';
const App = () => {
  const [number, setNumber] = useState(0);

  function handleNumber() {
    const NEW_NUMBER = Math.floor(Math.random() * 100);
    setNumber(NEW_NUMBER);
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" />
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleNumber} style={style.button}>
        <Text style={style.txtButton}>Gerar Número</Text>
      </TouchableOpacity>
      <Image style={style.img} source={{uri: IMG}} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#733073',
    color: '#FFF',
    borderRadius: 5,
    fontSize: 35,
    padding: 15,
    marginTop: 15,
  },
  img: {
    width: 185,
    height: 120,
    marginTop: 45,
  },
  txtButton: {
    color: '#FFF',
  },
});
export default App;
