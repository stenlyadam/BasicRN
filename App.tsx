import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Programmer from './assets/programmer.jpeg';

const App = () => {
  return (
    <View>
      <Text style={style.title}>Basic Component in RN</Text>
      <ScrollView>
        <TextInput
          placeholder="Masukan nama anda"
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            borderRadius: 20,
          }}
        />
        <View style={style.container}>
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        </View>
        <Image
          source={require('./assets/programmer.jpeg')}
          style={{width: 200, height: 200}}
        />
        <Image source={Programmer} style={{width: 200, height: 200}} />
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 200, height: 200}}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flexDirection: 'row',
  },
});

export default App;
