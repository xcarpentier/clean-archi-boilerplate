import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppText } from './AppText'
import AppColor from './AppColor'
import { Button } from 'react-native-paper'

interface Props {
  children: any
  hasError?: boolean
  reload?(): void
}

interface State {
  hasError?: boolean
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
})

export class AppErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    hasError: false,
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true }
  }

  state = { hasError: this.props.hasError }

  render() {
    if (this.state.hasError) {
      const { reload } = this.props
      return (
        <View style={styles.container}>
          <AppText size="l" center color={AppColor.primary}>
            Oups...
          </AppText>
          {reload && (
            <Button onPress={reload}>
              <AppText>reload</AppText>
            </Button>
          )}
        </View>
      )
    }
    return this.props.children
  }
}
