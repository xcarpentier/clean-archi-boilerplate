import React, { useState, useEffect } from 'react'
import { Updates, AppLoading } from 'expo'
import { AppErrorBoundary } from '@pack/common-ui/primitives/AppErrorBoundary'
import Provider from '@pack/common-ui/configuration/Provider'
import theme from '@pack/common-ui/configuration/Theme'
import { dependencies } from './configuration/dependencies'
import createAppStore from '@pack/common-context/configuration/redux/store'
import AppNavigation from './navcontext/ui/AppNavigation'
import * as Font from 'expo-font'

const store = createAppStore(dependencies)

const bootstrapAsync = async () => {
  await Font.loadAsync({
    'Open Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
}

export default function App() {
  const [isReady, setData] = useState(false)

  useEffect(() => {
    bootstrapAsync().then(() => setData(true))
  })

  return (
    <AppErrorBoundary reload={Updates.reload}>
      <Provider {...{ theme, store }}>
        {isReady ? <AppNavigation /> : <AppLoading />}
      </Provider>
    </AppErrorBoundary>
  )
}
