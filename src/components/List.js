import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RoundCheckbox from '../components/rn-chcekbox/RoundCheckbox';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const List = () => {
  const [tickBox1, setTickBox1] = useState(false);
  const [tickBox2, setTickBox2] = useState(false);
  const [tickBox3, setTickBox3] = useState(false);
  const [tickBox4, setTickBox4] = useState(false);

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
          checked={tickBox1}
          onValueChange={(newValue) => {
            setTickBox1(newValue);
          }}
        />
        {/* <CheckBox
          tintColors={{true: '#212529', false: '#fe4523'}}
          disabled={false}
          value={tickBox1}
          onValueChange={(newValue) => setTickBox1(newValue)}
          hideBox
          style={{
            width: 40,
            height: 40,
          }}
        /> */}
        {/* </View> */}
        <Text style={{fontSize: 20, marginLeft: 15}}>{item.title}</Text>
      </View>
      <View style={{borderBottomWidth: 0.5}} />
    </View>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
