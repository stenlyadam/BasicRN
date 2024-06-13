import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Home = () => {
  // let title = 'This is home page';
  const [title, setTitle] = useState('This is home page!!!');

  const handleSubmit = () => {
    // title = 'Welcome';
    setTitle('Welcome');
    // console.log(title);
  };
  return (
    <View>
      <Title text={title} />
      <Button text="Click me" onPress={handleSubmit} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
