import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Delivery = () => {
  return (
    <View style={styles.contsiner}>
      <Text> Delivery</Text>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
