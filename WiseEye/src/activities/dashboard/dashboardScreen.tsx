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
  const [isGasHigh, setIsGasHigh] = useState(false);

  useEffect(() => {
    database()
      .ref('/users/001/activate_deactivate/')
      .on('value', snapshot => {
        setIsActive(snapshot.val().status);
        setIsGasHigh(snapshot.val().gas);
      });
  }, []);

  useEffect(() => {
    database()
      .ref('/users/001/gas_detection/')
      .on('value', snapshot => {
        // setIsActive(snapshot.val().status);
        setIsGasHigh(snapshot.val().status);
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
        <DashboardCard
          isGasCard={false}
          isActive={isActive}
          isGasHigh={false}
        />
        <View
          style={{
            marginLeft: 6,
          }}>
          <DashboardCard
            isGasCard={true}
            isActive={isActive}
            isGasHigh={isGasHigh}
          />
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
