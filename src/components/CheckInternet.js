import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const CheckInternet = () => {
  const netInfo = useNetInfo();
  return (
    <>
      {netInfo.isConnected ? null : (
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You are Disconnected!</Text>
              <Text style={styles.modalText}>Please check your internet.</Text>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default CheckInternet;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FF9494',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    textAlign: 'center',
    color: '#fff',
  },
});
