import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import DashboardCard from '../../components/dashboardCard';
import TempCard from '../../components/tempCard';
import Notifications from '../../components/notifications';

const DashboardScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: 15,
          // marginVertical: 10,
        }}>
        <DashboardCard isActive={true} />
        {/* <DashboardCard /> */}
        <TempCard />
      </View>
      <View
        style={{
          // flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: 15,
          // marginVertical: 10,
        }}>
        <Notifications />
      </View>
      {/* <Text>DashboardScreen</Text>
       */}
    </View>
  );
};

export default DashboardScreen;
