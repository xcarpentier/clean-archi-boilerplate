import * as React from 'react'
import { AppErrorBoundary } from '@pack/common-ui/primitives/AppErrorBoundary'
import Provider from '@pack/common-ui/configuration/Provider'
import theme from '@pack/common-ui/configuration/Theme'
import { dependencies } from './configuration/dependencies'
import createAppStore from '@pack/common-context/configuration/redux/store'
import AppNavigation from 'navcontext/ui/AppNavigation'

const store = createAppStore(dependencies)

export default function App() {
  return (
    <AppErrorBoundary reload={window.location.reload}>
      <Provider {...{ theme, store }}>
        <AppNavigation />
      </Provider>
    </AppErrorBoundary>
  )
}
