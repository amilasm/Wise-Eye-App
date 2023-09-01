import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import SlideScreenOne from './slideScreenOne';
import SlideScreenTwo from './slideScreenTwo';
import SlideScreenThree from './slideScreenThree';
import SvgComponent2 from '../../assets/svgComp2';

const OnboardingScreen = () => {
  const data = [
    {
      id: 1,
      component: <SlideScreenOne />,
    },
    {
      id: 2,
      component: <SlideScreenTwo />,
    },
    {
      id: 2,
      component: <SlideScreenThree />,
    },
  ];

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View
      style={{
        width: '100%',
      }}>
      <Carousel
        width={width}
        loop={false}
        height={height}
        data={data}
        renderItem={({index, item}) => <>{item.component}</>}
      />
    </View>
  );
};

export default OnboardingScreen;
