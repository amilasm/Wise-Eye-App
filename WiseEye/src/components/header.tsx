import {View, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#F2F4F5',
        borderBottomWidth: 2,
        // elevation: 1.5,
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}>
          Dashboard
        </Text>
      </View>
    </View>
  );
};

export default Header;
