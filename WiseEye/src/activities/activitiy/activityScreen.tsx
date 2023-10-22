import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Arrow from '../../assets/arrow';
import DotIcon from '../../assets/dotIcon';
import ActivityCard from '../../components/activityCard';
import database from '@react-native-firebase/database';
import ActivityCardV2 from '../../components/activityCardV2';
import Header from '../../components/header';
import ArrowHead from '../../assets/arrowHead';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const ActivityScreen = ({navigation}) => {
  const [activites, setActivites] = useState([]);
  useEffect(() => {
    database()
      .ref('/users/001/activity_detection')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        const data = Object.values(snapshot.val());

        // Iterate through the data and group it by date
        const groupedData = {};
        data.forEach(item => {
          const date = item.time.split(' ')[0]; // Extract the date part

          // Check if the date already exists in the groupedData object
          if (groupedData[date]) {
            // If it exists, push the item to the existing array
            groupedData[date].Items.push(item.activity);
          } else {
            // If it doesn't exist, create a new object with date and Items properties
            groupedData[date] = {
              date,
              Items: [item.activity],
            };
          }
        });

        // Convert the groupedData object into an array of objects
        const resultArray = Object.values(groupedData);

        console.log('REsult array', resultArray[0].Items);
        setActivites(resultArray[0].Items);
        // setAccidents(data);
      });
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Header isNotDashboard={true} text={'Recent Activities'} />
      <FlatList
        data={activites}
        renderItem={activity => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(stackNames.ACTIVITY_STACK, {
                screen: screenNames.ACTIVTIY_VIew,
              })
            }
            style={{
              backgroundColor: '#0000001A',
              width: '100%',
              height: 120,
              borderBottomColor: '#00000080',
              borderBottomWidth: 0.5,
            }}>
            <View
              style={{
                marginTop: 16,
                marginLeft: 16,
                marginBottom: 16,
                marginRight: 16,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#00000080',
                }}>
                2023/10/16
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
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
                <View>
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
                    Activity Level
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#DBDBDB',
                    width: 24,
                    height: 24,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ArrowHead />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActivityScreen;
