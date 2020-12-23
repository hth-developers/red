import SInfo from 'react-native-sensitive-info';
import {USER_ID, USER_SI} from '../constants/userConstants';

export const setuser = async (user) => {
  let data = JSON.stringify(user);
  await SInfo.setItem(USER_ID, data, {
    sharedPreferencesName: USER_SI,
    keychainService: USER_SI,
  });
};

export const getuser = async (callback) => {
  const retriveData = await SInfo.getItem(USER_ID, {
    sharedPreferencesName: USER_SI,
    keychainService: USER_SI,
  });
  callback(JSON.parse(retriveData));
};
