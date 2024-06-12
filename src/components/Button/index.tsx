import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';

const Button = ({text, color = 'orange', onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button(color)}
      activeOpacity={0.5}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  }),
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
