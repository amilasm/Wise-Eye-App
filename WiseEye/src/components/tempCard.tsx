import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const TempCard = () => {
  return (
    <View
      style={{
        width: scale(131),
        height: scale(156),
        backgroundColor: '#F9F9F9',
        marginLeft: scale(20),
        borderRadius: 16,
        elevation: 2.5,
      }}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              // textAlign: 'center',
              fontWeight: '700',
            }}>
            Temperature
          </Text>
          <Text
            style={{
              // textAlign: 'center',
              fontWeight: '700',
              color: '#2D7BF0',
            }}>
            Normal
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              // textAlign: 'center',
              fontWeight: '700',
            }}>
            Gas Level
          </Text>
          <Text
            style={{
              // textAlign: 'center',
              fontWeight: '700',
              color: '#2D7BF0',
            }}>
            Normal
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 48,
            width: 71,
            height: 25,
            marginTop: 10,
            borderColor: '#999EA1',
          }}>
          <Text
            style={{
              fontSize: 11,
            }}>
            Live View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TempCard;
