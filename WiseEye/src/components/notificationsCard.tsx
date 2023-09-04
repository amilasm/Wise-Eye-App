import {View, Text} from 'react-native';
import React from 'react';

const NotificationsCard = () => {
  return (
    <View
      style={{
        width: 345,
        height: 72,
        borderColor: '#1DC48C',
        borderLeftWidth: 10,
        // borderEndWidth: 10,
        borderBottomWidth: 2,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: '#ffff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 5,
        }}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
            }}>
            Accident #000001
          </Text>
          <Text
            style={{
              fontWeight: '300',
              fontSize: 15,
              marginTop: 5,
            }}>
            2023-08-25 08:05:45
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
            }}>
            Accident #000001
          </Text>
          <Text
            style={{
              fontWeight: '300',
              fontSize: 15,
              marginTop: 5,
            }}>
            2023-08-25 08:05:45
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationsCard;
