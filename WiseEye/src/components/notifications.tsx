import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import NotificationsButton from './notificationsButton';
import NotificationsCard from './notificationsCard';

const Notifications = () => {
  const [isAccident, setisAccident] = useState(true);
  return (
    <View
      style={{
        width: '100%',
        height: 372,
        backgroundColor: '#F9F9F9',
      }}>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        {/* <TouchableOpacity
          style={{
            width: 99,
            height: 32,
            backgroundColor: '#1DC48C87',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginRight: 10,
          }}>
          <Text>Accident</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 99,
            height: 32,
            backgroundColor: '#1DC48C87',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text>Accident</Text>
        </TouchableOpacity> */}
        <NotificationsButton text={'Accident'} active={true} />
        <NotificationsButton text={'Voice'} />
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <NotificationsCard />
      </View>
      {/* {isAccident == true ? <ScrollView /> : <ScrollView />} */}
    </View>
  );
};

export default Notifications;
