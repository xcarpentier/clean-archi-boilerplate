import * as React from 'react'
import { MainContainer } from '@pack/common-ui/primitives/AppView'
import { Heading1 } from '@pack/common-ui/primitives/AppText'

interface ChatProps {
  path?: string
}
export default function Chat(_props: ChatProps) {
  return (
    <MainContainer>
      <Heading1>Chat</Heading1>
    </MainContainer>
  )
}
