import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = ({text}) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 20,
  },
});
