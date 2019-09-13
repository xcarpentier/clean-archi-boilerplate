import React from 'react'
import { Centered } from './AppView'
import { ActivityIndicator } from 'react-native-paper'

export function AppLoader() {
  return (
    <Centered
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator />
    </Centered>
  )
}
