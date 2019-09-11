import React from 'react'
import { Logs } from 'expo'
import { useScreens } from 'react-native-screens'

useScreens()

if (__DEV__) {
  const isRemoteDebuggingEnabled = typeof atob !== 'undefined'
  if (isRemoteDebuggingEnabled) {
    Logs.disableExpoCliLogging()
  } else {
    Logs.enableExpoCliLogging()
  }
}

console.disableYellowBox = true

export default () => {
  const IndexComp = require('./src/index').default
  return <IndexComp />
}
