import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {navConfig} from './navigationConfigs';
import {stackNames} from '../constants/stackNames';
import AuthStack from './stacks/authStack';
import Tabs from './tabNavigation';
import OnboardingStack from './stacks/onboardingStack';

const RootStackNav = createNativeStackNavigator();

const RootNavigationStack = () => {
  return (
    <NavigationContainer>
      <RootStackNav.Navigator>
        <RootStackNav.Screen
          name={stackNames.ONBOARDING_STACK}
          component={OnboardingStack}
          options={{
            ...navConfig,
            animation: 'slide_from_right',
          }}
        />
        <RootStackNav.Screen
          name={stackNames.AUTH_STACK}
          component={AuthStack}
          options={{
            ...navConfig,
            animation: 'slide_from_right',
          }}
        />
        <RootStackNav.Screen
          name={stackNames.TAB_STACK}
          component={Tabs}
          options={navConfig}
        />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationStack;
