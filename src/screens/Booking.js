import React, {useState} from 'react';
import {StyleSheet, TextInput, KeyboardAvoidingView, View} from 'react-native';
import NavigationServices from '../utils/navigation';

import List from '../components/List';

const Booking = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TextInput
          style={{borderBottomWidth: 0.5, paddingHorizontal: 20}}
          placeholder="Serch Booking"
        />
      </KeyboardAvoidingView>
      <List />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({});
