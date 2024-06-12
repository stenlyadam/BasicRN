import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Exercise1 = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topBox1} />
        <View style={styles.topBox2} />
        <View style={styles.topBox3} />
      </View>
      <View style={styles.middleContainer}>
        <Image
          style={{height: 90, width: 400}}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomBox1} />
        <View style={styles.bottomBox2} />
        <View style={styles.bottomBox3} />
      </View>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topBox1: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    margin: 10,
  },
  topBox2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    margin: 10,
  },
  topBox3: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    margin: 10,
  },
  bottomBox1: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    margin: 10,
  },
  bottomBox2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    margin: 10,
  },
  bottomBox3: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    margin: 10,
  },
});
