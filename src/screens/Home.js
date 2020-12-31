import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  StatusBar,
} from 'react-native';
import Icon from '../components/Icon';

// import navigation from '../utils/navigation';

//TODO:
// List with Serchbar

const Home = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.contsiner}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFF" />
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          margin: 10,
          marginRight: 20,
          backgroundColor: '#000',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
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
    marginTop: 20,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
});
