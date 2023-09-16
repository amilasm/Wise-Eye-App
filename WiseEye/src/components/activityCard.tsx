import {View, Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const ActivityCard = ({date, count, activityLevel}) => {
  return (
    <View
      style={{
        width: '100%',
        height: scale(56),
        borderWidth: 1,
        borderRadius: 8,
      }}>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>{`Date : ${date}`}</Text>
          <Text
            style={{
              fontWeight: '400',
              marginTop: 5,
            }}>{`Total Activity Count : ${count}`}</Text>
        </View>
        <View>
          <Text
            style={{
              color: 'red',
            }}>{`Activity Level : ${activityLevel}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;
