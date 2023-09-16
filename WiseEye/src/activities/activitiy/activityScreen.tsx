import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Arrow from '../../assets/arrow';
import DotIcon from '../../assets/dotIcon';
import ActivityCard from '../../components/activityCard';
import database from '@react-native-firebase/database';

const ActivityScreen = () => {
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

        console.log('REsult array', resultArray);
        setActivites(resultArray);
        // setAccidents(data);
      });
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginRight: 20,
            }}>
            <Arrow />
          </View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Activity Manager
          </Text>
        </View>
        <View>
          <DotIcon />
        </View>
      </View>
      {/* <Text>ActivityScreen</Text> */}
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <FlatList
          data={activites}
          renderItem={item => {
            return (
              <ActivityCard
                date={item.item.date}
                count={item.item.Items.length}
                activityLevel={item.item.Items.length * 10}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ActivityScreen;
