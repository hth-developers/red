import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const GenderPicker = ({pickgender, gender}) => {
  return (
    <>
      <DropDownPicker
        items={[
          {label: 'Male', value: 'male'},
          {label: 'Female', value: 'female'},
          {label: 'Others', value: 'others'},
        ]}
        placeholder="Select Gender"
        containerStyle={{
          height: 50,
          margin: 10,
        }}
        defaultValue={gender}
        style={{
          backgroundColor: '#fff',

          borderColor: '#d3d3d3',
        }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fff'}}
        onChangeItem={(item) => pickgender(item.value)}
      />
    </>
  );
};

export default GenderPicker;

const styles = StyleSheet.create({});
