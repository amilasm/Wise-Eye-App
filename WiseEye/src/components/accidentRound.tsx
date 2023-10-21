import {View, Text, Image} from 'react-native';
import React from 'react';

const AccidentRound = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFBA55',
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={require('../assets/fallIcon.png')} />
    </View>
  );
};

export default AccidentRound;
