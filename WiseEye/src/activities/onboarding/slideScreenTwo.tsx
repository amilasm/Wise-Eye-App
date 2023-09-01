import {View, Text, Image} from 'react-native';
import React from 'react';
import SvgComponent from '../../assets/svgComp';
import WiseEyeLogo from '../../assets/wiseEyeLogo';
import {scale} from 'react-native-size-matters';
import SlideDots from '../../components/slideDots';
import SlideScreenTwoImage from '../../assets/slideScreenTwoImage';

const SlideScreenTwo = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SvgComponent />
      {/* <Text>SlideScreenTwo</Text> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // flex: 1,
        }}>
        <WiseEyeLogo />
        <SlideScreenTwoImage />
        <Text
          style={{
            marginBottom: scale(20),
          }}>
          sdsdsd
        </Text>
        <SlideDots twoActive={true} />
      </View>
    </View>
  );
};

export default SlideScreenTwo;
