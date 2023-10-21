import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import DashboardCard from '../../components/dashboardCard';
import TempCard from '../../components/tempCard';
import Notifications from '../../components/notifications';
import database from '@react-native-firebase/database';
import DeviceActive from '../../assets/deviceActive';
import DeviceStatus from '../../components/deviceStatus';

const DashboardScreen = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    database()
      .ref('/users/001/activate_deactivate/001')
      .on('value', snapshot => {
        setIsActive(snapshot.val().status);
      });
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <Header />
      <DeviceStatus isActive={isActive} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 15,
          marginRight: 15,
          // marginVertical: 10,
        }}>
        <DashboardCard isGasCard={false} isActive={isActive} />
        <View
          style={{
            marginLeft: 6,
          }}>
          <DashboardCard isGasCard={true} isActive={isActive} />
        </View>

        {/* <DashboardCard /> */}
        {/* <TempCard /> */}
      </View>
      <View
        style={{
          // flexDirection: 'row',
          marginTop: 20,
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
