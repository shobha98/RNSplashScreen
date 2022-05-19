import React, {useEffect} from 'react';
import {StyleSheet, Text, View, BackHandler} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.exampleText}>This is About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exampleText: {
    fontSize: 18,
    color: 'black',
  },
});

export default About;
