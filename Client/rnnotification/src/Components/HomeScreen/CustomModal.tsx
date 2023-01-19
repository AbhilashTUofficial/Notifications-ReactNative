import { View, Text, Modal, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { CustomModalProps } from '../../Types';
import LinkBtn from './LinkBtn';

const CustomModal:React.FC<CustomModalProps> = 
({modalVisible,setModalVisible,setMessage,message,sendNotification}) => {
  return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(false);
            }}>
            <View
            style={customModalStyles.cont}>
                <View
                style={customModalStyles.modal}>
                <Text>Enter the message for the notification:</Text>
                <TextInput
                    style={{ height: 40}}
                    onChangeText={text => setMessage(text)}
                    value={message}
                />
                <View
                style={customModalStyles.btns}>
                <LinkBtn text="Cancel" onPress={() => setModalVisible(false)} />
                <LinkBtn text="Send" onPress={sendNotification} />
                </View>

                </View>
            </View>
        </Modal>
    
  )
}

export default CustomModal

const customModalStyles=StyleSheet.create({
    cont:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    modal:{
        margin:16,
        elevation:3,
        backgroundColor:"white",
        padding:26,
        height:Dimensions.get("screen").width*0.8,
        justifyContent:"space-evenly"
    },
    btns:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    }

})