import React from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet} from 'react-native';

const AppLoader = () => {
  return (
    <Lottie
      source={require('../assets/animation/loader.json')}
      autoPlay
      loop
      style={styles.lottie}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    height: 80,
    width: 80,
    flex: 1,
    alignSelf: 'center',
  },
});
export default AppLoader;
