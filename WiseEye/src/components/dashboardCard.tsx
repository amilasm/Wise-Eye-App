import {View, Text, Image} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import WiseEyeLogo from '../assets/wiseEyeLogo';
import DeviceActive from '../assets/deviceActive';
import DeviceDeactivated from '../assets/deviceDeactivated';

const DashboardCard = ({isActive}) => {
  return (
    <View
      style={{
        width: scale(167),
        height: scale(156),
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F9F9F9',
        elevation: 2.5,
        borderRadius: 20,
      }}>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: scale(105),
            height: scale(32),
          }}
          source={require('../assets/logo.png')}
        />
        {/* <View
          style={{
            height: 50,
          }}>
          <WiseEyeLogo />
        </View> */}

        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 700,
            marginTop: 50,
          }}>
          Device Status
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {isActive == true ? (
            <>
              <Text
                style={{
                  color: '#1DC48C',
                }}>
                Online
              </Text>
              <DeviceActive />
            </>
          ) : (
            <>
              <Text
                style={{
                  color: '#EB3223',
                  fontWeight: 'bold',
                }}>
                OFFLINE
              </Text>

              {/* <DeviceActive /> */}
              <DeviceDeactivated />
            </>
          )}
        </View>
      </View>
      {/* <Text>DashboardCard</Text> */}
    </View>
  );
};

export default DashboardCard;
