import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';

// import navigation from '../utils/navigation';

//TODO:
// List with Serchbar

const Home = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.contsiner}>
      <Image style={styles.logo} source={require('../assets/Logo/logo.png')} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'Booking',
              })
            }>
            <Text style={{color: '#fff'}}>150</Text>
            <Text style={{color: '#fff'}}>Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'Inward',
              })
            }>
            <Text style={{color: '#fff'}}>170</Text>
            <Text style={{color: '#fff'}}>Inward</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'Dispatch',
              })
            }>
            <Text style={{color: '#fff'}}>480</Text>
            <Text style={{color: '#fff'}}>Dispatch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('Delivery')}>
            <Text style={{color: '#fff'}}>100</Text>
            <Text style={{color: '#fff'}}>Delivery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  logo: {
    width: '50%',
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 10,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#212529',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 8,
    height: 150,
    width: '44%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
