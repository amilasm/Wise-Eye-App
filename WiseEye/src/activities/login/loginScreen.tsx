import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="dfdf"
        onPress={() => navigation.navigate(stackNames.TAB_STACK)}
      />
    </View>
  );
};

export default LoginScreen;
