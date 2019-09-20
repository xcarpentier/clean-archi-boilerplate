import React, { useState } from 'react'
import { GiftedChat, IMessage, User } from 'react-native-gifted-chat'
import { Text } from 'react-native-paper'
import { Centered } from '@pack/common-ui/primitives/AppView'
import { View, Dimensions } from 'react-native'

interface ChatProps {
  path?: string
}
export default function Chat(_props: ChatProps) {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 123,
      text: 'coucou',
      user: { _id: 2, name: 'you' },
      createdAt: new Date(),
    },
  ])
  const onSend = (newMsg: IMessage[]) => setMessages([...messages, ...newMsg])
  const user: User = { _id: 1, name: 'me' }
  const inverted = false
  const { width, height } = Dimensions.get('window')

  return (
    <View style={{ width, height }}>
      <GiftedChat {...{ messages, onSend, user, inverted }} />
    </View>
  )
}
