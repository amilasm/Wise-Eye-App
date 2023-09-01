import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SlideDotActive from '../assets/slideDotsActive';
import SlideDotNotActive from '../assets/slideDotNotActive';
import {scale} from 'react-native-size-matters';

const SlideDots = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => console.log('ds')}
        style={{
          marginRight: scale(10),
        }}>
        {props.oneActive ? <SlideDotActive /> : <SlideDotNotActive />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('ds')}
        style={{
          marginRight: scale(10),
        }}>
        {props.twoActive ? <SlideDotActive /> : <SlideDotNotActive />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('ds')}
        style={{
          marginRight: scale(10),
        }}>
        {props.threeActive ? <SlideDotActive /> : <SlideDotNotActive />}
      </TouchableOpacity>
    </View>
  );
};

export default SlideDots;
