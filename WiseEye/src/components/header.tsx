import {View, Text, Image} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
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
        {/* <Text
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}></Text> */}

        <Image
          style={{
            width: scale(105),
            height: scale(32),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={require('../assets/logo.png')}
        />
      </View>
    </View>
  );
};

export default Header;
