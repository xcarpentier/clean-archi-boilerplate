import * as React from 'react'
import { View, Text } from 'react-native'
import Provider from '@pack/common-ui/configuration/Provider'
import theme from '@pack/common-ui/configuration/Theme'
import store from '@pack/common-state/configuration/redux/store'

export default function App() {
  return (
    <Provider {...{ theme, store }}>
      <View>
        <Text>Hello App!</Text>
      </View>
    </Provider>
  )
}
