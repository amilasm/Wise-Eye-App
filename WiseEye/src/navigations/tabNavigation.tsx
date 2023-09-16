import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from '../constants/screenNames';
import DashboardStack from './stacks/dashboardStack';
import {navConfig} from './navigationConfigs';
import {stackNames} from '../constants/stackNames';
import DashboardIcon from '../assets/dashboardIcon';
import LiveIcon from '../assets/liveIcon';
import ActivityIcon from '../assets/activityIcon';
import AlertIcon from '../assets/alertIcon';
import ActivityStack from './stacks/activityStack';

const Tab = createBottomTabNavigator();
// screens related to the tab bar
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.DASHBOARD}
      screenOptions={{
        tabBarActiveTintColor: '#0BE9A6',
      }}>
      <Tab.Screen
        name={stackNames.DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <DashboardIcon focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={stackNames.LIVE_STACK}
        component={DashboardStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <LiveIcon focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={stackNames.ACTIVITY_STACK}
        component={ActivityStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <ActivityIcon focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={stackNames.ALERT_STACK}
        component={DashboardStack}
        options={{
          ...navConfig,
          tabBarIcon: ({color, size, focused}) => (
            <AlertIcon focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
