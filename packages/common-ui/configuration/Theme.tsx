import { DefaultTheme, Theme } from 'react-native-paper'
import Color from '../primitives/Color'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.primary,
  },
}

export default theme
