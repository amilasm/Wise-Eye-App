import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/screenNames';
import {navConfig} from '../navigationConfigs';
import LoginScreen from '../../activities/login/loginScreen';
import QrScanner from '../../activities/login/qrScanner';
import ActivityScreen from '../../activities/activitiy/activityScreen';
import ActivityView from '../../activities/activitiy/activityView';

const ActivityStackNav = createNativeStackNavigator();

const ActivityStack = () => {
  return (
    <ActivityStackNav.Navigator>
      <ActivityStackNav.Screen
        name={screenNames.ACTIVTIY}
        component={ActivityScreen}
        options={navConfig}
      />
      <ActivityStackNav.Screen
        name={screenNames.ACTIVTIY_VIew}
        component={ActivityView}
        options={navConfig}
      />
    </ActivityStackNav.Navigator>
  );
};

export default ActivityStack;
