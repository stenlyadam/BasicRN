import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    //JSX
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Hello React Native</Text>
      <TextInput style={styles.input} placeholder="Masukan email" />
      <TextInput style={styles.input} placeholder="Masukan password" />
      <Image
        style={styles.logo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image style={styles.gambar} source={require('./assets/voucher.png')} />
      <Image
        style={styles.logo2}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <View style={styles.boxRed} />
      <View style={styles.boxGreen} />
      <View style={styles.boxBlue} />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  boxRed: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
  boxGreen: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
  },
  boxBlue: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
  },
  gambar: {
    width: 200,
    height: 200,
  },
  logo2: {
    width: 200,
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '800',
    textAlign: 'center',
    margin: 10,
  },
});
