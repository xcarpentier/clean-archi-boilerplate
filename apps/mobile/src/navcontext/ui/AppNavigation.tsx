import React from 'react'
import { setAppNavigation } from '../configuration/AppNavigationSingleton'
import { AppNavigatorBase } from '../configuration/navigation.configuration'

export default function AppNavigation() {
  return <AppNavigatorBase ref={setAppNavigation} />
}
