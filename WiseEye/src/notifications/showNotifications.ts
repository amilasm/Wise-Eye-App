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
    title: data.notification.title,
    body: data.notification.body,
    data: {data},
    android: {
      channelId,
      smallIcon: 'ic_launcher',

      loopSound: true,
      ongoing: data.data.ongoing == 'True' ? true : false,
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
