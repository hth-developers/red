import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Track = () => {
  return (
    <View style={styles.contsiner}>
      <Text>Track US</Text>
    </View>
  );
};

export default Track;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
