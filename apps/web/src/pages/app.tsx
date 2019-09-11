import * as React from 'react'
import '../../static/base.css'
import Provider from '@pack/common-ui/configuration/Provider'
import createAppStore from '@pack/common-context/configuration/redux/store'
import theme from '@pack/common-ui/configuration/Theme'
import { dependencies } from '../configuration/dependencies'
import { AppErrorBoundary } from '@pack/common-ui/primitives/AppErrorBoundary'
import AppNavigationBase from '../navcontext/configuration/navigation.configuration'

const store = createAppStore(dependencies)

export default function App() {
  return (
    <AppErrorBoundary reload={window.location.reload}>
      <Provider {...{ theme, store }}>
        <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
        <AppNavigationBase />
      </Provider>
    </AppErrorBoundary>
  )
}
