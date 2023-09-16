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

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SlideScreenOneImage />
        <Text
          style={{
            marginBottom: scale(20),
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '300',
            marginTop: 10,
          }}>
          Appeal with respect to elderly people as you would to the members of
          your own family.
        </Text>
        <SlideDots oneActive={true} />
      </View>
    </View>
  );
};

export default SlideScreenOne;
