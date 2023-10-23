import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';

const showNotification = async (data: any, HIGHIMPORTANCE = true) => {
  // const callData = await JSON.parse(remoteMessage.call_data);

  const channelId = await notifee.createChannel({
    id: 'device',
    name: 'Wise Eye Notifications',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
    vibration: false,
  });

  await notifee.displayNotification({
    id: 'device',
    title: 'savedName',
    body: "callData.call_reason + ' - Duration: ' + callData.call_duration + 'min'",
    data: {data},
    android: {
      channelId,
      smallIcon: 'ic_launcher',

      loopSound: true,
      ongoing: true,
      pressAction: {
        id: 'incoming-call',
        launchActivity: 'default',
      },
      importance: HIGHIMPORTANCE
        ? AndroidImportance.HIGH
        : AndroidImportance.NONE,
    },
  });
};

export default showNotification;
