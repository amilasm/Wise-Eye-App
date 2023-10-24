import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import AccidentRound from '../../components/accidentRound';
import VoiceRound from '../../components/voiceRound';
import StatusBadge from '../../components/statusBadge';

const ActivityView = ({route}) => {
  const [sitting, setSitting] = useState(0);
  const [standing, setStanding] = useState(0);
  const [walking, setWalking] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(route.params);
    if (route.params !== undefined) {
      setSitting(route.params.sitting_count);
      setStanding(route.params.standing_count);
      setWalking(route.params.walking_count);
      // setTotal(sitting + standing + walking);
    }
  }, [route.params]);

  useEffect(() => {
    setTotal(sitting + standing + walking);
  }, [sitting, standing, walking]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F7F7',
      }}>
      <Header isNotDashboard={true} text={'Activities - 2023/10/24'} />
      <View
        style={{
          backgroundColor: '#EBEBEB',
          height: 88,
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: 'black',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            {total}
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
        {/* <View
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
        </View> */}
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
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AccidentRound color={'#6BD9F1'} />
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
                  {((sitting / total) * 100).toFixed(2)}%
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 16,
            paddingLeft: 16,
            paddingBottom: 16,
            paddingRight: 16,
            height: 160,
            borderRadius: 8,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AccidentRound color={'#FCCB83'} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
                marginLeft: 10,
              }}>
              Moderate Level
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
                <StatusBadge isVoice={true} text={'Standing'} />
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
                  {((standing / total) * 100).toFixed(2)}%
                </Text>
              </View>
            </View>
          </View>
        </View>
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
            <AccidentRound color={'#FF5981'} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
                marginLeft: 10,
              }}>
              High Level
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
                <StatusBadge isVoice={true} text={'Walking'} />
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
                  {((walking / total) * 100).toFixed(2)}%
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
