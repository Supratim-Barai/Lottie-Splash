import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <View style={styles.root}>
      <LottieView
        source={require('./assets/splash.json')}
        autoPlay
        loop={false}
        
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
});
