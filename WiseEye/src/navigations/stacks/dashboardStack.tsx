import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/screenNames';
import {navConfig} from '../navigationConfigs';
import DashboardScreen from '../../activities/dashboard/dashboardScreen';

const DashboardStackNav = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <DashboardStackNav.Navigator>
      <DashboardStackNav.Screen
        name={screenNames.DASHBOARD}
        component={DashboardScreen}
        options={navConfig}
      />
    </DashboardStackNav.Navigator>
  );
};

export default DashboardStack;
