import { DefaultTheme, Theme } from 'react-native-paper'
import AppColor from '../primitives/AppColor'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColor.primary,
  },
}

export default theme
