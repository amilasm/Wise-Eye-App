import {View, Text} from 'react-native';
import React from 'react';
import AccidentRound from './accidentRound';
import StatusBadge from './statusBadge';

const NotificationsCard = ({accidentId, date, location, status}) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 10,
        paddingBottom: 20,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          // marginRight: 10,
          marginLeft: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <AccidentRound />
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000000',
                  fontWeight: '600',
                }}>
                Motion Detected
              </Text>
              <Text
                style={{
                  color: '#00000080',
                  fontWeight: '500',
                  marginLeft: 10,
                }}>
                At Living Room
              </Text>
            </View>
            <Text
              style={{
                marginLeft: 10,
              }}>
              5 mins ago
            </Text>
          </View>
        </View>

        <View
          style={{
            marginRight: 20,
          }}>
          <StatusBadge />
        </View>
      </View>
      <View
        style={{
          marginLeft: 10,
          marginRight: 30,

          marginTop: 15,
          height: 0.5,
          backgroundColor: '#00000080',
        }}
      />
    </View>
  );
};

export default NotificationsCard;
