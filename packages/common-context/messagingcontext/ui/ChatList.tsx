import * as React from 'react'
import { MainContainer } from '@pack/common-ui/primitives/AppView'
import { Heading1 } from '@pack/common-ui/primitives/AppText'

interface ChatListProps {
  path?: string
}
export default function ChatList(_props: ChatListProps) {
  return (
    <MainContainer>
      <Heading1>ChatList</Heading1>
    </MainContainer>
  )
}
