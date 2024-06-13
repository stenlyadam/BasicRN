import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const Home = () => {
  // let title = 'This is home page';
  const [title, setTitle] = useState('This is home page!!!');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    // title = 'Welcome';
    setTitle(`Welcome ${name}`);
    // console.log(title);
  };
  const handleInputNama = e => {
    setName(e);
  };
  return (
    <View>
      <Title text={title} />
      <TextInput
        label="Nama"
        placeholder="Masukan nama anda"
        onChangeText={handleInputNama}
      />
      <Button text="Click me" onPress={handleSubmit} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
