import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const NotificationsButton = ({text, onPress, active}) => {
  return (
    <TouchableOpacity
      style={{
        width: 99,
        height: 32,
        backgroundColor: active == true ? '#1DC48C87' : '#999EA14D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 10,
      }}
      onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default NotificationsButton;
