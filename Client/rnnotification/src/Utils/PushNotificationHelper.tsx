import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
export async function requestUserPermission() {
  // Only need to do this on IOS
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    await getFCMToken()
  }
}

async function getFCMToken(){
    let fcmToken=await AsyncStorage.getItem("fcmToken");
    console.log("token: "+fcmToken)
    if(!fcmToken){
        messaging().getToken()
        .then(async (token) => {
            try {
                await AsyncStorage.setItem('fcmToken', token);
            } catch (error) {
                console.log(error);
            }
        });
    }
}

