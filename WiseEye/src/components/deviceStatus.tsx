import {View, Text} from 'react-native';
import React from 'react';
import WifiIcon from './wifiIcon';
import WifiOff from './wifiOff';

const DeviceStatus = ({isActive}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isActive ? '#1DC48C' : 'black',
        width: '100%',
        height: 50,
        flexDirection: 'row',
      }}>
      {isActive ? <WifiIcon /> : <WifiOff />}
      <Text
        style={{
          color: isActive ? 'black' : 'white',
          fontSize: 16,
          fontWeight: '500',
          marginLeft: 20,
        }}>
        {isActive ? 'Device is online' : 'Device is Offline'}
      </Text>
    </View>
  );
};

export default DeviceStatus;
