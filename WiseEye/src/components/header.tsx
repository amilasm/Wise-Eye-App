import {View, Text, Image} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const Header = ({isNotDashboard, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#F2F4F5',
        borderBottomWidth: 2,
        backgroundColor: 'white',
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
        {isNotDashboard ? (
          <>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#040A1A',
              }}>
              {text}
            </Text>
          </>
        ) : (
          <Image
            style={{
              width: scale(105),
              height: scale(30),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../assets/logo.png')}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
