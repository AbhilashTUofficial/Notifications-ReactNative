import messaging from '@react-native-firebase/messaging';
import { localNotification } from './SendNotificationAndroid';

export const notificationListner=()=>{
    messaging().onNotificationOpenedApp(remoteMessage=>{
        localNotification(remoteMessage.notification)
      console.log(
        "Notifcation will cause the app to run on background",
        remoteMessage.notification,
      )
    })
    messaging().getInitialNotification().then(remoteMessage=>{
      if(remoteMessage){
        localNotification(remoteMessage.notification)
        console.log(
          "Notification cause the app to open quite state",
          remoteMessage.notification,
        )
      }
    })
    messaging().onMessage(async remoteMessage=>{
        localNotification(remoteMessage.notification)
      console.log("Notification on forground state",remoteMessage)
    })

    messaging().setBackgroundMessageHandler(remoteMessage=>{
        localNotification(remoteMessage.notification)
      console.log("Notification on background state",remoteMessage)
        return Promise.resolve();
    })
    
  }
  