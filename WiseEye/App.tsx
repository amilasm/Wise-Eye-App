/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import RootNavigationStack from './src/navigations/rootNavigations';

import RNBootSplash from 'react-native-bootsplash';
function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <>
      <RootNavigationStack />
    </>
  );
}

export default App;
