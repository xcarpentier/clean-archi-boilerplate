import * as React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { AppAccessibilityRole } from './AppAccessibilityRole'
import AppColor from './AppColor'
import { Text } from 'react-native-paper'

type AppSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
type AppWeight = 'thin' | 'normal'

type AppTextPropsBase = Omit<Text['props'], 'accessibilityRole'> & {
  accessibilityRole?: AppAccessibilityRole
  'aria-level'?: string
}

export interface AppTextProps extends AppTextPropsBase {
  color?: AppColor
  backgroundColor?: AppColor
  size?: AppSize
  center?: boolean
  children: React.ReactNode
  weight?: AppWeight
  href?: string
  target?: HTMLAnchorElement['target']
}

const TextBase = (Text as any) as React.ComponentType<AppTextProps>

const BaseStyle = StyleSheet.create({
  defaultStyle: {
    color: AppColor.black,
    fontWeight: '600',
    fontFamily: 'Open Sans',
    lineHeight: 20,
    ...Platform.select({
      default: undefined,
      web: {
        WebkitFontSmoothing: 'antialiased',
      },
    }),
  },
})

const calculateFontSize = (size?: AppSize): number => {
  switch (size) {
    case 'xs': {
      return 12
    }
    case 's': {
      return 14
    }
    case 'm': {
      return 16
    }
    case 'l': {
      return 20
    }
    case 'xl': {
      return 25
    }
    case 'xxl': {
      return 36
    }
    default: {
      return 16
    }
  }
}

export const AppText = ({
  color,
  size,
  style,
  center,
  weight,
  backgroundColor,
  ...props
}: AppTextProps) => (
  <TextBase
    style={[
      BaseStyle.defaultStyle,
      {
        color,
        backgroundColor,
        fontSize: calculateFontSize(size),
        lineHeight: calculateFontSize(size) * 1.5,
      },
      center ? { textAlign: 'center' } : { textAlign: 'left' },
      { fontWeight: weight === 'normal' ? '600' : '400' },
      style,
    ]}
    {...props}
  />
)

export const Heading1 = (props: AppTextProps) => (
  <AppText accessibilityRole="heading" weight="normal" size="xxl" {...props} />
)

export const Heading2 = (props: AppTextProps) => (
  <AppText
    accessibilityRole="heading"
    aria-level="2"
    weight="normal"
    size="xl"
    {...props}
  />
)

export const Heading3 = (props: AppTextProps) => (
  <AppText
    accessibilityRole="heading"
    aria-level="3"
    weight="normal"
    size="l"
    {...props}
  />
)

export const Heading4 = (props: AppTextProps) => (
  <AppText
    accessibilityRole="heading"
    aria-level="4"
    weight="normal"
    size="m"
    {...props}
  />
)

export const Paragraph = (props: AppTextProps) => (
  <AppText weight="thin" size="m" {...props} />
)
