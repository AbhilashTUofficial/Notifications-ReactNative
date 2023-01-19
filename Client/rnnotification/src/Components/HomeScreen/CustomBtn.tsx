import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Btn } from '../../Types'

const CustomBtn:React.FC<Btn> = ({onPress,text}) => {
  return (
    <Pressable
    style={customBtnStyles.btn}
    onPress={onPress}>
      <Text
      style={customBtnStyles.text}>{text}</Text>
    </Pressable>
  )
}

export default CustomBtn;

const customBtnStyles=StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    margin: 26,
    backgroundColor: "#06d79c",
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    // shadowColor: "#06d79c",
    // shadowOpacity: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowRadius: 3
  },
  text:{
    color:"white",
    fontWeight:"bold",
  }
})

