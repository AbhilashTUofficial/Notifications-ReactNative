export interface Btn{
    text:string,
    onPress:any,
}

export interface HandlerType{
    message:string,
}

export interface CustomModalProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    setMessage: (message: string) => void;
    message: string;
    sendNotification: () => void;
  }

export interface Notifcation {
    title: string;
    message: string;
    channelId: string;
    importance:string;
}

export interface UserInfo{
    name:string;
    userId:string;
}
export  interface DeviceInfo{
    DeviceToken:string;
    OS:string;
    Model:string;
}