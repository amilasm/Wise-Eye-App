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

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide();
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
