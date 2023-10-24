import {View, Text} from 'react-native';
import React from 'react';
import StatusBadge from './statusBadge';
import AccidentRound from './accidentRound';
import VoiceRound from './voiceRound';
import MessageIcon from '../assets/messageIcon';

const VoiceCard = ({voiceId, date, voice, status}) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 25,
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
          <VoiceRound />
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
                Voice Detected
              </Text>
              <Text
                style={{
                  color: '#00000080',
                  fontWeight: '500',
                  marginLeft: 10,
                }}>
                now
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginTop: 2,
                }}>
                <MessageIcon />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  width: 160,
                }}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {voice}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginRight: 10,
          }}>
          <StatusBadge isVoice={true} text={'Voice'} />
        </View>
      </View>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,

          marginTop: 15,
          height: 0.5,
          backgroundColor: '#00000080',
        }}
      />
    </View>
  );
};

export default VoiceCard;
