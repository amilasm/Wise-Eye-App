import {View, Text, Image} from 'react-native';
import React from 'react';
import SvgComponent2 from '../../assets/svgComp2';
import SlideScreenOneImage from '../../assets/slideScreenOneImage';
import SlideDots from '../../components/slideDots';
import {scale} from 'react-native-size-matters';
import OnboardinOne from '../../assets/onboardingOne';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OnboardingTwo from '../../assets/onboardingTwo';

const SlideScreenOne = () => {
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
        <OnboardingTwo />
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
          Unparalleled Monitoring
        </Text>
        <View
          style={{
            width: scale(337),
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
            Unmatched safety. Detects falls, tracks activity, and recognizes
            voices for loved ones' well-being at home.
          </Text>
        </View>

        <SlideDots twoActive={true} />
      </View>
      <View
        style={{
          marginLeft: scale(20),
          marginRight: scale(20),
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: scale(90),
        }}>
        <TouchableOpacity>
          <Text style={{color: '#09B67CE0', fontSize: 16, fontWeight: '400'}}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#09B67CE0', fontSize: 16, fontWeight: '800'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideScreenOne;
