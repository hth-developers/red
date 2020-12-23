import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

const ForgetPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Need help logging in</Text>
      <Text style={styles.textSecond}>
        Tell us your email and we'll send you a link to logging in
      </Text>
      <View style={styles.login_container}>
        <Text style={styles.email_container}>Email address</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <View style={{marginTop: 24}}>
          <TouchableOpacity style={styles.sendmail}>
            <Text style={{color: '#fff', alignSelf: 'center'}}>Send Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 19,
  },
  baseText: {
    color: '#474747',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
  },

  textSecond: {
    color: '#474747',
    marginTop: 15,
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'left',
  },
  login_container: {
    marginTop: 24,
  },
  email_container: {
    color: '#474747',
    fontSize: 14,
    fontWeight: '900',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  input: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },

  sendmail: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#212529',
    padding: 15,
    borderRadius: 8,
  },
});
