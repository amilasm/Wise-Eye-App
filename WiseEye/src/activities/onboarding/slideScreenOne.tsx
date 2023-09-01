import {View, Text, Image} from 'react-native';
import React from 'react';
import SvgComponent2 from '../../assets/svgComp2';
import SlideScreenOneImage from '../../assets/slideScreenOneImage';
import SlideDots from '../../components/slideDots';
import {scale} from 'react-native-size-matters';

const SlideScreenOne = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SvgComponent2 />
      {/* <Text>SlideScreenOne</Text> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SlideScreenOneImage />
        <Text
          style={{
            marginBottom: scale(20),
          }}>
          sdsdsd
        </Text>
        <SlideDots oneActive={true} />
      </View>
    </View>
  );
};

export default SlideScreenOne;
