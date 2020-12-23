import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bezier_Line_Chart, Pie_Chart} from '../components/Charts';

const {width} = Dimensions.get('window');
const Dashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.contsiner}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => console.log('clicked')}>
          <Text style={{color: '#fff'}}>150</Text>
          <Text style={{color: '#fff'}}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => console.log('clicked')}>
          <Text style={{color: '#fff'}}>170</Text>
          <Text style={{color: '#fff'}}>Inward</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => console.log('clicked')}>
          <Text style={{color: '#fff'}}>480</Text>
          <Text style={{color: '#fff'}}>Dispatch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => console.log('clicked')}>
          <Text style={{color: '#fff'}}>100</Text>
          <Text style={{color: '#fff'}}>Delivery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chartContainer}>
        <Bezier_Line_Chart width={width} />
      </View>
      <View style={styles.chartContainer}>
        <Pie_Chart width={width} />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    // paddingVertical: 50,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#212529',
    // padding: 48,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
    height: 150,
    width: '44%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
});
