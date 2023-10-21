/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import RootNavigationStack from './src/navigations/rootNavigations';

import RNBootSplash from 'react-native-bootsplash';

import database from '@react-native-firebase/database';

import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
// import messaging from '@react-native-firebase/messaging';
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const get = async () => {
  const token = await messaging().getToken();

  console.log('token', token);
};

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide();
    requestUserPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    get();
  }, []);

  // useEffect(() => {
  //   database()
  //     .ref('/users/123')
  //     .set({
  //       name: 'Ada Lovelace',
  //       age: 31,
  //     })
  //     .then(() => console.log('Data set.'));
  // }, []);

  return (
    <>
      <RootNavigationStack />
    </>
  );
}

export default App;
