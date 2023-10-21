import {View, Text} from 'react-native';
import React from 'react';
import HederBack from '../../components/headerBack';
import WebView from 'react-native-webview';

const ViewLive = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <HederBack isNotDashboard={true} /> */}
      <View
        style={{
          display: 'flex',
          flex: 1,
        }}>
        <WebView
          style={{
            flex: 1,
          }}
          source={{
            uri: 'https://mature-slightly-moccasin.ngrok-free.app/index.html',
          }}
        />
      </View>
    </View>
  );
};

export default ViewLive;
