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

const SlideScreenThree = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SvgComponent3 />
      <SlideScreenThreeImage />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 300,
            marginBottom: 10,
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
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>

        <SlideDots twoActive={true} />
      </View>
    </View>
  );
};

export default SlideScreenThree;
