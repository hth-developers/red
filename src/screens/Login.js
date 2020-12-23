import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import CheckInternet from '../components/CheckInternet';
import GenderPicker from '../components/GenderPicker';
import MyButton from '../components/MyButton';
import {setuser, getuser} from '../functions/commonfunstions';

const Login = (props) => {
  const {navigation} = props;
  const [tickBox, setTickBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    getuser((resp) => {
      if (resp) {
        setTickBox(resp.tickBox),
          setEmail(resp.email),
          setPassword(resp.password),
          setGender(resp.gender);
      } else {
      }
    }).done();
  }, []);

  const pickgender = (data) => setGender(data);

  const submit = () => {
    if (tickBox) {
      const user = {
        email,
        password,
        gender,
        tickBox,
      };
      setuser(user);
      navigation.navigate('DashboardTabs');
    } else {
      const user = {
        email,
        gender,
        tickBox,
      };
      setuser(user);
      navigation.navigate('DashboardTabs');
    }
  };

  return (
    <>
      <CheckInternet />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} backgroundColor="#212529" />
          <View style={styles.back} />
          <View style={styles.front}>
            <View style={styles.heading}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>Sign In</Text>
                <View style={styles.active} />
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={(value) => setEmail(value)}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
              <GenderPicker gender={gender} pickgender={pickgender} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                  marginLeft: 10,
                }}>
                <Text>Remember me</Text>
                <CheckBox
                  tintColors={{true: '#212529', false: '#212529'}}
                  disabled={false}
                  value={tickBox}
                  onValueChange={(newValue) => setTickBox(newValue)}
                />
              </View>
            </View>
            <MyButton ButtonText="Sign In" callback={submit} />
            <TouchableOpacity
              style={styles.forgetButton}
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.forgetText}> Forget Password</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#d3d3d3',
  },
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
  back: {
    backgroundColor: '#212529',
    height: 300,
  },
  front: {
    backgroundColor: '#fff',
    height: '70%',
    width: '80%',
    position: 'absolute',
    alignSelf: 'center',
    marginHorizontal: 100,
    marginTop: 150,
    borderRadius: 15,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#000',
    height: 5,
    width: 50,
    margin: 10,
    borderRadius: 50,
  },
  forgetButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  forgetText: {
    textDecorationLine: 'underline',
  },
});
