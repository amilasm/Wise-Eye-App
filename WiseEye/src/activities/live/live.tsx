import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import ArrowHead from '../../assets/arrowHead';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';

const Live = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Header isNotDashboard={true} text={'Live Preview'} />
      <View
        style={{
          backgroundColor: 'white',
          display: 'flex',
          //   flex: 1,
        }}>
        <View
          style={{
            // flex: 1,
            flexDirection: 'column',
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View style={{marginTop: 16}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
              }}>
              Living Room
            </Text>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#DEDEDE',
                  width: 180,
                  height: 100,
                  marginRight: 10,
                  borderRadius: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/cameraIcon.png')}
                    style={{
                      width: 24,
                      height: 30,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: 500,
                      color: 'black',
                    }}>
                    Front{'\n'}Camera
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowHead />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#DEDEDE',
                  width: 170,
                  height: 100,
                  marginRight: 50,
                  borderRadius: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/cameraIcon.png')}
                    style={{
                      width: 24,
                      height: 30,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: 500,
                      color: 'black',
                    }}>
                    Front{'\n'}Camera
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowHead />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
              }}>
              Kitchen Room
            </Text>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(stackNames.LIVE_STACK, {
                    screen: screenNames.LIVE_PREVIEW,
                  })
                }
                style={{
                  backgroundColor: '#DEDEDE',
                  width: 180,
                  height: 100,
                  marginRight: 10,
                  borderRadius: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/cameraIcon.png')}
                    style={{
                      width: 24,
                      height: 30,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: 500,
                      color: 'black',
                    }}>
                    Front{'\n'}Camera
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowHead />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#DEDEDE',
                  width: 170,
                  height: 100,
                  marginRight: 50,
                  borderRadius: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/cameraIcon.png')}
                    style={{
                      width: 24,
                      height: 30,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: 500,
                      color: 'black',
                    }}>
                    Front{'\n'}Camera
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowHead />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Live;
