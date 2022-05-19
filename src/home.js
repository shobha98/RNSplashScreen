import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.exampleText}>Welcome Splash example</Text>
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

export default Home;
