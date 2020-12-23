import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MyButton = ({ButtonText, callback}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={() => callback()}>
      <Text style={{color: '#fff'}}>{ButtonText}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#212529',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
