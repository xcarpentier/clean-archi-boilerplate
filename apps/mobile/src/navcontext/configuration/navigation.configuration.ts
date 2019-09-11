import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Root views
export const AppNavigatorBase = createAppContainer(
  createStackNavigator(
    {},
    {
      initialRouteName: '???',
    },
  ),
)
