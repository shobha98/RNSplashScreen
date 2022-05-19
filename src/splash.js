import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import souled_store from './asserts/souled_store.gif';
import souled from './asserts/souled.gif';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

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
