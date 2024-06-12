import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Title text="Welcome" />
      <TextInput label="Username" placeholder="Masukan username anda" />
      <TextInput label="Password" placeholder="Masukan password anda" />
      <Button text="Email Sign In" />
      <Button text="Facebook Sign In" color="blue" />
      <Button text="Google Sign In" color="red" />
      <Button text="Apple Sign In" color="black" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    marginHorizontal: 20,
  },
});
