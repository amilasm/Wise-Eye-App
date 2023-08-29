import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from '../constants/screenNames';
import DashboardStack from './stacks/dashboardStack';
import {navConfig} from './navigationConfigs';
import {stackNames} from '../constants/stackNames';

const Tab = createBottomTabNavigator();
// screens related to the tab bar
const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={screenNames.DASHBOARD}>
      <Tab.Screen
        name={stackNames.DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          ...navConfig,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
