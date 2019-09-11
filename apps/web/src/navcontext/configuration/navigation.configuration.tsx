import * as React from 'react'
import { Router } from '@reach/router'
import ChatList from '@pack/common-context/messagingcontext/ui/ChatList'
import Chat from '@pack/common-context/messagingcontext/ui/Chat'
export default function AppNavigationBase() {
  return (
    <Router>
      <ChatList path="app/chatlist" />
      <Chat path="app/chat" />
    </Router>
  )
}
