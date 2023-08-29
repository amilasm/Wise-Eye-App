import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/screenNames';
import {navConfig} from '../navigationConfigs';
import LoginScreen from '../../activities/login/loginScreen';

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen
        name={screenNames.LOGIN}
        component={LoginScreen}
        options={navConfig}
      />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
