import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomBtn from '../../Components/HomeScreen/CustomBtn';
import CustomModal from '../../Components/HomeScreen/CustomModal';
import { callUrl } from '../../Utils/Http';
import { sendNotification } from '../../Utils/SendNotificationAndroid';
import {requestUserPermission} from '../../Utils/PushNotificationHelper'
import { notificationListner } from '../../Utils/NotificationListner';

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const [notification, setNotification] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const localNotifyHandler = () => {
    setModalVisible(true);
  }
  const pushNotifyHandler=()=>{
    callUrl(" "," "," ")
  }

  useEffect(()=>{
    requestUserPermission()
    notificationListner()
  })

  return (
    <View style={homeScreenStyles.cont}>
      <Text>{notification ? "Notification Sent!" : "Press the button to send a notification"}</Text>
      <CustomBtn text="Send Local Notification" onPress={localNotifyHandler} />
      <CustomBtn text="Send Push Notification" onPress={pushNotifyHandler}/>

      <CustomModal 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible} 
      setMessage={setMessage} 
      message={message} 
      sendNotification={()=>sendNotification({
        title: 'Notify',
        message: message,
        channelId: 'my_channel_id',
        importance: 'High'
      },setModalVisible,setNotification)} />

    </View>
  );
}

export default HomeScreen

const homeScreenStyles=StyleSheet.create({
    cont:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    }
})
