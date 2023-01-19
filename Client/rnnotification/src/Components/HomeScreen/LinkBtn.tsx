import { Text, Pressable } from 'react-native'
import React from 'react'
import { Btn } from '../../Types'

const LinkBtn:React.FC<Btn> = ({text,onPress}) => {
  return (
    <Pressable
    onPress={onPress}>
        <Text>
            {text}
        </Text>
    </Pressable>
  )
}

export default LinkBtn