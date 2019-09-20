import * as React from 'react'
import '../configuration/env.config'
import '../../static/base.css'
import Provider from '@pack/common-ui/configuration/Provider'
import createAppStore from '@pack/common-context/configuration/redux/store'
import theme from '@pack/common-ui/configuration/Theme'
import { dependencies } from '../configuration/dependencies'
import { AppErrorBoundary } from '@pack/common-ui/primitives/AppErrorBoundary'
import AppNavigationBase from '../navcontext/configuration/navigation.configuration'
import { Centered } from '@pack/common-ui/primitives/AppView'
import { Helmet } from 'react-helmet'
import AppColor from '@pack/common-ui/primitives/AppColor'

const store = createAppStore(dependencies)

export default function App() {
  return (
    <AppErrorBoundary reload={() => console.log('todo reload')}>
      <Provider {...{ theme, store }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Clean Archi Boilerplate</title>
          <meta name="apple-itunes-app" content="app-id=myAppStoreID" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-title"
            content="Clean Archi Boilerplate"
          />
          <meta
            name="apple-mobile-web-app-status-bar"
            content={AppColor.primary}
          />
        </Helmet>
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
