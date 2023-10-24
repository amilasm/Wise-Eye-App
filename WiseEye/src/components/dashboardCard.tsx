import {View, Text, Image} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import WiseEyeLogo from '../assets/wiseEyeLogo';
import DeviceActive from '../assets/deviceActive';
import DeviceDeactivated from '../assets/deviceDeactivated';
import TempIcon from '../assets/tempIcon';

const DashboardCard = ({isGasCard, isActive, isGasHigh}) => {
  return (
    <View
      style={{
        width: scale(160),
        height: scale(156),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        // elevation: 2.5,
        borderRadius: 20,
      }}>
      <View
        style={{
          // marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {isActive ? (
          isGasCard && isGasHigh == true ? (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 52,
                  fontWeight: 700,
                  color: '#000000',

                  // marginTop: 50,
                }}>
                HIGH
              </Text>
            </>
          ) : isGasCard == false && isGasHigh == false ? (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 52,
                  fontWeight: 700,
                  color: '#000000',

                  // marginTop: 50,
                }}>
                29.4C
              </Text>
            </>
          ) : (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 52,
                  fontWeight: 700,
                  color: '#000000',

                  // marginTop: 50,
                }}>
                LOW
              </Text>
            </>
          )
        ) : (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 52,
              fontWeight: 700,
              color: '#000000',

              // marginTop: 50,
            }}>
            --.--
          </Text>
        )}

        <View
          style={{
            flexDirection: 'row',
          }}>
          {isGasCard ? (
            <>
              <Image
                source={require('../assets/Gas2.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '500',
                }}>
                Gas Level
              </Text>
            </>
          ) : (
            <>
              <TempIcon />

              <Text
                style={{
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '500',
                }}>
                Temperature
              </Text>
            </>
          )}
        </View>
      </View>
      {/* <Text>DashboardCard</Text> */}
    </View>
  );
};

export default DashboardCard;
