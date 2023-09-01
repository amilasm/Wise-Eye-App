import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';
import WiseEyeLogo from '../../assets/wiseEyeLogo';
import ButtonComponent from '../../components/buttonComponent';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
        }}>
        <WiseEyeLogo />
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
          }}>
          Welcome to WiseEye
        </Text>

        <Text
          style={{
            marginBottom: 50,
          }}>
          Enter your device id to proceed
        </Text>
        <Text>Device ID</Text>
        <TextInput
          placeholder="Enter you device id"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 10,
            marginBottom: 20,
          }}
        />
        <ButtonComponent />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>Or scan your QR</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
