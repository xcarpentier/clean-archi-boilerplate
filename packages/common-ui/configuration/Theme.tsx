import { DefaultTheme, Theme } from 'react-native-paper'
import AppColor from '../primitives/AppColor'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColor.primary,
  },
  fonts: {
    medium: 'Open Sans',
    light: 'Open Sans',
    thin: 'Open Sans',
    regular: 'Open Sans',
  },
}

export default theme
