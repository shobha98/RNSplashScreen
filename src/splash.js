import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import souled_store from './asserts/souled_store.gif';
import souled from './asserts/souled.gif';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={souled}
        style={styles.gifImage}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  gifImage: {
    width: '95%',
    height: '100%',
  },
});

export default Splash;
