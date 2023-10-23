import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgComponent3 from '../../assets/svgComp3';
import SlideScreenThreeImage from '../../assets/slideScreenThreeImage';
import SlideDots from '../../components/slideDots';
import {scale} from 'react-native-size-matters';
import {withDecay} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';
import OnboardingThree from '../../assets/onboardingThree';

const SlideScreenThree = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: scale(50),
        }}>
        <OnboardingThree />
        <Text
          style={{
            marginBottom: scale(20),
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '700',
            marginTop: 10,
            fontSize: 24,
            color: '#09B67C',
          }}>
          Enhanced Living{' '}
        </Text>
        <View
          style={{
            width: scale(330),
          }}>
          <Text
            style={{
              marginBottom: scale(20),
              justifyContent: 'center',
              textAlign: 'center',
              fontWeight: '300',
              marginTop: 10,
              fontSize: 18,
            }}>
            WiseEye empowers independent living, offering an improved quality of
            life with the assurance of nearby assistance
          </Text>
        </View>

        <SlideDots threeActive={true} />
      </View>
      <View
        style={{
          marginLeft: scale(20),
          marginRight: scale(20),
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: scale(70),
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(stackNames.AUTH_STACK, {
              screen: screenNames.LOGIN,
            })
          }
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: scale(38),
            width: '100%',
            backgroundColor: '#1DC48C',
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideScreenThree;
