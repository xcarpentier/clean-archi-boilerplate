import React, { useState } from 'react'
import { GiftedChat, IMessage, User } from 'react-native-gifted-chat'
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
  const { height } = Dimensions.get('window')

  return (
    <View style={{ width: '100%', height }}>
      <GiftedChat {...{ messages, onSend, user, inverted }} />
    </View>
  )
}
