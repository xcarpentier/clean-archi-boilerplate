import * as React from 'react'
import '../../static/base.css'
import Provider from '@pack/common-ui/configuration/Provider'
import createAppStore from '@pack/common-context/configuration/redux/store'
import theme from '@pack/common-ui/configuration/Theme'
import { Heading1 } from '@pack/common-ui/primitives/AppText'
import { MainContainer } from '@pack/common-ui/primitives/AppView'
import { dependencies } from '../configuration/dependencies'
import { AppErrorBoundary } from '@pack/common-ui/primitives/AppErrorBoundary'

const store = createAppStore(dependencies)

export default function App() {
  return (
    <AppErrorBoundary reload={window.location.reload}>
      <Provider {...{ theme, store }}>
        <MainContainer>
          <Heading1>Hello App!</Heading1>
        </MainContainer>
      </Provider>
    </AppErrorBoundary>
  )
}
