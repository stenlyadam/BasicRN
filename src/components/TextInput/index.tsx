import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});
