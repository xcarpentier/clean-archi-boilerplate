import * as React from 'react'
import '../../static/base.css'
import { View } from 'react-native'
import Provider from '@pack/common-ui/configuration/Provider'
import theme from '@pack/common-ui/configuration/Theme'
import store from '@pack/common-state/configuration/redux/store'
import { Heading1 } from '@pack/common-ui/primitives/AppText'
import { MainContainer, Main } from '@pack/common-ui/primitives/AppView'

export default function App() {
  return (
    <Provider {...{ theme, store }}>
      <MainContainer>
        <Heading1>Hello App!</Heading1>
      </MainContainer>
    </Provider>
  )
}
