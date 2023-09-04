import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const ButtonComponent = ({onPress}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(38),
        width: '100%',
        backgroundColor: '#1DC48C',
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        Get Started
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
