import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/screenNames';
import {navConfig} from '../navigationConfigs';
import OnboardingScreen from '../../activities/onboarding/onboardingScreen';

const OnboardingStackNav = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <OnboardingStackNav.Navigator>
      <OnboardingStackNav.Screen
        name={screenNames.ONBOARDING}
        component={OnboardingScreen}
        options={navConfig}
      />
    </OnboardingStackNav.Navigator>
  );
};

export default OnboardingStack;
