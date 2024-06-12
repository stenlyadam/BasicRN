import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Flexbox</Text>
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    margin: 20,
  },
  box1: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  box3: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
});
