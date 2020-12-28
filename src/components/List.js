import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RoundCheckbox from '../components/rn-chcekbox/RoundCheckbox';

const DATA = [
  {
    id: 0,
    title: 'First Item',
  },
  {
    id: 1,
    title: 'Second Item',
  },
  {
    id: 2,
    title: 'Third Item',
  },
];

const List = () => {
  const [tickBox, setTickBox] = useState(true);

  const renderItem = ({item}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 15,
          marginLeft: 10,
        }}>
        {/* <View style={{backgroundColor: 'grey', borderRadius: 50, padding: 10}}> */}
        <RoundCheckbox
          size={40}
          icon="checkmark"
          style={{margin: 100}}
          backgroundColor="#000"
          checked={tickBox}
          onValueChange={(newValue) => {
            setTickBox(newValue);
          }}
        />
        <Text style={{fontSize: 20, marginLeft: 15}}>{item.title}</Text>
      </View>
      <View style={{borderBottomWidth: 0.5}} />
    </View>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
