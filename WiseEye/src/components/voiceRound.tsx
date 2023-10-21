import {View, Text, Image} from 'react-native';
import React from 'react';

const VoiceRound = () => {
  return (
    <View
      style={{
        backgroundColor: '#DEDEDE',
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/voiceIcon3.png')}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </View>
  );
};

export default VoiceRound;
