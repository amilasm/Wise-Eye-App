import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import BackIcon from '../assets/backIcon';
import {useNavigation} from '@react-navigation/native';

const HederBack = ({isNotDashboard, text}) => {
  const navigation = useNavigation();
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
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon />
      </TouchableOpacity>
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
      <View></View>
    </View>
  );
};

export default HederBack;
