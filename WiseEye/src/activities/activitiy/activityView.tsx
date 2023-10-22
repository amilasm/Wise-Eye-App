import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import AccidentRound from '../../components/accidentRound';
import VoiceRound from '../../components/voiceRound';
import StatusBadge from '../../components/statusBadge';

const ActivityView = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F7F7',
      }}>
      <Header isNotDashboard={true} text={'Activities - 2023/10/21'} />
      <View
        style={{
          backgroundColor: '#EBEBEB',
          height: 88,
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: 'black',
            }}>
            200
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#00000080',
            }}>
            Total Activity Count
          </Text>
        </View>
        <View
          style={{
            marginRight: 20,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: 'black',
            }}>
            80%
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#00000080',
            }}>
            Total Activity Count
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 16,
            paddingLeft: 16,
            paddingBottom: 16,
            paddingRight: 16,
            height: 160,
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AccidentRound />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
                marginLeft: 10,
              }}>
              Low Level
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#0000004D',
              height: 0.3,
              marginTop: 10,
              marginBottom: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#00000080',
                }}>
                Activity Class
              </Text>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                }}>
                <StatusBadge isVoice={true} text={'Sitting'} />
              </View>
            </View>

            <View
              style={{
                marginRight: 50,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#00000080',
                }}>
                Activity Class
              </Text>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  50
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityView;
