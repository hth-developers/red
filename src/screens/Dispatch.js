import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dispatch = () => {
  return (
    <View style={styles.contsiner}>
      <Text>Dispatch</Text>
    </View>
  );
};

export default Dispatch;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
