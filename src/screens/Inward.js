import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Inward = () => {
  return (
    <View style={styles.contsiner}>
      <Text>Inward</Text>
    </View>
  );
};

export default Inward;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
