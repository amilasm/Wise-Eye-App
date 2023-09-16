import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';
import WiseEyeLogo from '../../assets/wiseEyeLogo';
import ButtonComponent from '../../components/buttonComponent';
import LoginLogo from '../../assets/loginLogo';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [deviceId, setDeviceId] = React.useState('');
  const login = () => {
    if (deviceId != '0001') {
      ToastAndroid.show('Please enter your device id', ToastAndroid.SHORT);
    } else {
      navigation.navigate(stackNames.TAB_STACK);
    }
  };
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
          marginTop: 50,
        }}>
        {/* <LoginLogo /> */}
        <Image
          source={require('../../assets/Group1.png')}
          style={{
            marginBottom: 20,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Welcome to WiseEye
        </Text>

        <Text
          style={{
            marginBottom: 20,
          }}>
          Enter your device ID to proceed
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
          onChangeText={text => setDeviceId(text)}
        />
        <ButtonComponent onPress={login} />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.QRSCANNER)}>
            <Text>Or scan your QR code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
