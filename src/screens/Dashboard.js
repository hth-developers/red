import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Bezier_Line_Chart, Pie_Chart} from '../components/Charts';

import Icon from '../components/Icon';

const {width} = Dimensions.get('window');
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.contsiner}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'Booking',
              })
            }>
            <Icon name={'booking'} size={70} color={'#fff'} />
            <Text style={styles.buttonText}>150 Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'Inward',
              })
            }>
            <Icon name={'inward'} size={70} color={'#fff'} />
            <Text style={styles.buttonText}>170 Inward</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'Dispatch',
              })
            }>
            <Icon name={'dispatch'} size={70} color={'#fff'} />
            <Text style={styles.buttonText}>480 Dispatch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('Delivery')}>
            <Icon name={'delivery'} size={70} color={'#fff'} />
            <Text style={styles.buttonText}>100 Delivery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chartContainer}>
          <Bezier_Line_Chart width={width} />
        </View>
        <View style={styles.chartContainer}>
          <Pie_Chart width={width} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
});
