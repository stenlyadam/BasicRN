import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Home = () => {
  let title = 'Welcome';
  return (
    <View>
      <Title text="This is home page" />
      <Button text="Click me" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
