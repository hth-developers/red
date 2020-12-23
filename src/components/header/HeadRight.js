import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HeadRight = () => {
  return (
    <TouchableOpacity
      style={{
        padding: 12,
        margin: 10,
        borderRadius: 8,
      }}>
      <Text style={{color: '#000'}}>Button</Text>
    </TouchableOpacity>
  );
};

export default HeadRight;

const styles = StyleSheet.create({});
