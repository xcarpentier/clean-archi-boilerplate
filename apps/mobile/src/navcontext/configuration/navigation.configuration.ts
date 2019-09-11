import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ChatList from '@pack/common-context/messagingcontext/ui/ChatList'
import Chat from '@pack/common-context/messagingcontext/ui/Chat'

// Root views
export const AppNavigatorBase = createAppContainer(
  createStackNavigator(
    {
      Chat,
      ChatList,
    },
    {
      initialRouteName: 'Chat',
      headerMode: 'none',
    },
  ),
)
