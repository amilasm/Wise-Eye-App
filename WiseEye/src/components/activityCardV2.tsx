import {View, Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const ActivityCardV2 = ({isToday}) => {
  return (
    <View
      style={{
        width: '100%',
        height: scale(77),
        backgroundColor: isToday ? '#ECECEC' : '#ECECEC',
        borderRadius: 12,
        // flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 15,
          marginLeft: 12,
          marginRight: 12,
          marginBottom: 15,
          justifyContent: 'space-between',
          //   alignItems: 'center',
        }}>
        <View
          style={{
            width: scale(48),
            height: scale(47),
            backgroundColor: isToday ? '#1DC48CC9' : '#1DC48CC9',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
          }}>
          <Text>15</Text>
          <Text>AUG</Text>
        </View>
        <View
          style={{
            width: scale(150),
            height: scale(47),
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'black',
              }}>
              15
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
              }}>
              : 2020-12-20
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'black',
              }}>
              15
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
              }}>
              : 2020-12-20
            </Text>
          </View>
        </View>
        <View
          style={{
            width: scale(48),
            height: scale(47),
            backgroundColor: isToday ? '#1DC48CC9' : '#7CA1B1B2',
            flexDirection: 'column',
          }}>
          <Text>15</Text>
          <Text>AUG</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityCardV2;
