import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const SignIn = () => {
  const emailSignIn = () => {
    console.log('Sign In With Email');
  };
  const facebookSignIn = () => {
    console.log('Sign In With Facebook');
  };
  const googleSignIn = () => {
    console.log('Sign In With Google');
  };

  const appleSignIn = () => {
    console.log('Sign In With Apple');
  };
  return (
    <View style={styles.page}>
      <Title text="Welcome" />
      <TextInput label="Username" placeholder="Masukan username anda" />
      <TextInput label="Password" placeholder="Masukan password anda" />
      <Button text="Email Sign In" onPress={emailSignIn} />
      <Button text="Facebook Sign In" color="blue" onPress={facebookSignIn} />
      <Button text="Google Sign In" color="red" onPress={googleSignIn} />
      <Button text="Apple Sign In" color="black" onPress={appleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    marginHorizontal: 20,
  },
});
