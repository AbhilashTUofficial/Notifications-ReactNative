import { Platform } from 'react-native';
import Notification from 'react-native-push-notification';
import { Notifcation } from '../Types';

export const sendNotification = 
(notification: Notifcation, setModalVisible: Function, setNotification: Function) => {
    if (Platform.OS === 'android') {
        Notification.createChannel(
            {
                channelId: notification.channelId,
                channelName: 'My Channel',
                channelDescription: 'My channel description',
                soundName: 'default',
                importance: 4,
            },
            (created) => console.log('channel created', created)
        );
    }
    localNotification(notification)
    setModalVisible(false);
    setNotification(true);
}

export const localNotification=(notification: Notifcation)=>{
    Notification.localNotification({
        title: notification.title,
        message: notification.message,
        channelId: notification.channelId,
        importance:"high",
    });
}
