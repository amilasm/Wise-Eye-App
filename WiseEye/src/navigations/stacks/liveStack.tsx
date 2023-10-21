import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/screenNames';
import {navConfig} from '../navigationConfigs';
import LoginScreen from '../../activities/login/loginScreen';
import QrScanner from '../../activities/login/qrScanner';
import ActivityScreen from '../../activities/activitiy/activityScreen';
import Live from '../../activities/live/live';
import ViewLive from '../../activities/live/viewLive';

const LiveStackNav = createNativeStackNavigator();

const LiveStack = () => {
  return (
    <LiveStackNav.Navigator>
      <LiveStackNav.Screen
        name={screenNames.LIVE}
        component={Live}
        options={navConfig}
      />
      <LiveStackNav.Screen
        name={screenNames.LIVE_PREVIEW}
        component={ViewLive}
        options={{
          ...navConfig,
          orientation: 'landscape',
        }}
      />
    </LiveStackNav.Navigator>
  );
};

export default LiveStack;
