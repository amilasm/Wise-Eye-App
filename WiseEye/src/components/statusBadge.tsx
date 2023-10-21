import {View, Text} from 'react-native';
import React from 'react';

const StatusBadge = ({isVoice}) => {
  return (
    <View
      style={{
        height: 28,
        width: 58,
        backgroundColor: isVoice ? '#F8F8F8' : '#FFE7E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#11182729',
        borderRadius: 6,
        borderWidth: 1,
      }}>
      <Text
        style={{
          color: isVoice ? '#575C6C' : '#940E0E',
        }}>
        {isVoice ? 'Voice' : 'Fell'}
      </Text>
    </View>
  );
};

export default StatusBadge;
