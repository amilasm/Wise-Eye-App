import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';
import {stackNames} from '../../constants/stackNames';
import {screenNames} from '../../constants/screenNames';

const QrScanner = () => {
  const [navigate, setNavigate] = useState(false);
  const navigation = useNavigation();
  const onSuccess = (e: any) => {
    console.log(typeof JSON.stringify(e.data));
    const data = '"{deviceId:0001}"';
    console.log(JSON.stringify(e.data) == data.toString());
    // const data = JSON.parse(e.data);
    if (JSON.stringify(e.data) == data.toString()) {
      setNavigate(true);
    } else {
      setNavigate(false);
    }
  };

  useEffect(() => {
    if (navigate == true) {
      navigation.navigate(stackNames.TAB_STACK, {
        screenNames: screenNames.DASHBOARD,
      });
    }
  }, [navigate]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={3000}
        showMarker={true}

        // customMarker={}
      />
    </View>
  );
};

export default QrScanner;
