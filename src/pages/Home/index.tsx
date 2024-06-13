import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import axios from 'axios';

const Home = () => {
  // let title = 'This is home page';
  const [title, setTitle] = useState('This is home page!!!');
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, []);

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
      {users.map(item => {
        return <Text style={styles.users}>{item.name}</Text>;
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  users: {
    fontSize: 16,
    marginBottom: 5,
  },
});
