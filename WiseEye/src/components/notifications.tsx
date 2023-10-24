import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import NotificationsButton from './notificationsButton';
import NotificationsCard from './notificationsCard';

import database from '@react-native-firebase/database';
import VoiceCard from './voiceCard';
import Modal from 'react-native-modal';
const Notifications = () => {
  const [isAccident, setisAccident] = useState(true);
  const [isVoice, setisVoice] = useState(false);
  const [accidents, setAccidents] = useState([]);
  const [voices, setVoices] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState({});

  const voiceClickHandler = () => {
    setisAccident(false);
    setisVoice(true);
  };

  const accidentClickHandler = () => {
    setisAccident(true);
    setisVoice(false);
  };

  useEffect(() => {
    database()
      .ref('/users/001/fall_detection')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        const data = Object.values(snapshot.val());
        console.log(data);
        setAccidents(data);
      });
  }, []);
  useEffect(() => {
    database()
      .ref('/users/001/speech')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        const data = Object.values(snapshot.val());
        console.log(data);
        setVoices(data);
      });
  }, []);

  // useEffect(() => {
  //   database()
  //   .ref('/users/123')
  //   .on('value', snapshot => {
  //     console.log('User data: ', snapshot.val());
  //   });
  // }, [])

  return (
    <View
      style={{
        width: '100%',
        height: 390,
        // backgroundColor: '#F9F9F9',
        borderRadius: 16,
        // elevation: 2.5,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Button title="Show modal" onPress={() => setIsModalVisible(true)} /> */}

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => {
            setIsModalVisible(false);
            setItem({});
          }}>
          <View
            style={{
              // flex: 0.5,
              // justifyContent: 'center
              marginLeft: 30,
              borderRadius: 20,
              padding: 20,
              backgroundColor: 'white',
              width: 300,
              height: 200,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 20,
                marginBottom: 10,
              }}>
              Voice Detected
            </Text>

            <Text
              style={{
                textAlign: 'center',
              }}>
              {item.text}
            </Text>

            {/* <Text>Hello!</Text> */}
            <View
              style={{
                width: '100%',
                marginBottom: 10,
                marginTop: 10,
              }}>
              <Button
                title="Call 1990"
                color={'#1dc48c'}
                onPress={() => setIsModalVisible(false)}
              />
            </View>
            <View
              style={{
                width: '100%',
                marginBottom: 10,
              }}>
              <Button
                title="Call 119"
                color={'#1dc48c'}
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          // marginHorizontal: 10,
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 25,
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
        <NotificationsButton
          text={'Accidents'}
          active={isAccident}
          onPress={accidentClickHandler}
        />
        <NotificationsButton
          text={'Voice'}
          active={isVoice}
          onPress={voiceClickHandler}
        />
      </View>

      {isAccident == true ? (
        <FlatList
          data={accidents}
          renderItem={item => {
            // console.log('THsi si tiem', item);
            return (
              <View
                style={{
                  alignItems: 'center',
                }}>
                <NotificationsCard
                  accidentId={item.index}
                  location={item.item.location}
                  status={item.item?.status[0]}
                />
              </View>
            );
          }}
        />
      ) : (
        <>
          <FlatList
            data={voices}
            renderItem={item => {
              // console.log('THsi si tiem', item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    setIsModalVisible(true);
                    setItem(item.item);
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                    }}>
                    <VoiceCard
                      voiceId={'111'}
                      voice={item.item.text}
                      date={item.item.time}
                      status={item.item?.emergency_level}
                      // accidentId={item.index}
                      // location={item.item.location}
                      // status={item.item?.status[0]}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

export default Notifications;
