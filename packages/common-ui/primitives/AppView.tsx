import * as React from 'react'
import { FlexStyle, StyleSheet, View } from 'react-native'
import { AppAccessibilityRole } from './AppAccessibilityRole'
import AppColor from './AppColor'

type LayerType = 'constrained' | undefined
type LayerDirection = 'row' | 'column' | undefined

const BaseStyle = StyleSheet.create({
  defaultStyle: {
    position: 'relative',
    backgroundColor: AppColor.transparent,
  },
  constrained: {
    paddingHorizontal: 20,
  },
  mainHead: {
    maxWidth: 650,
    width: '100%',
    paddingBottom: 40,
  },
  mainContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  main: {
    maxWidth: 800,
    width: '100%',
  },
  box: {
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: AppColor.greyLLL,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  gridItem: {
    height: 274,
    width: 395,
    paddingHorizontal: 15,
  },
  borderBox: {
    flex: 1,
    padding: 45,
    borderColor: AppColor.primary,
    borderWidth: 2,
    borderRadius: 4,
    shadowColor: AppColor.blackT,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})

type AppViewPropsBase = Omit<View['props'], 'accessibilityRole'> & {
  accessibilityRole?: AppAccessibilityRole
  className?: string
  ref?: (c: any) => void
}

const ViewBase = (View as any) as React.ComponentType<AppViewPropsBase>

export interface AppViewProps extends AppViewPropsBase {
  type?: LayerType
  direction?: LayerDirection
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  wrap?: FlexStyle['flexWrap']
  backgroundColor?: AppColor
  center?: boolean
  fullWidth?: boolean
  hiddenXS?: boolean
  visibleXS?: boolean
  children: React.ReactNode
}

export class AppView extends React.Component<AppViewProps> {
  root?: any = undefined

  render() {
    const {
      type,
      backgroundColor,
      center,
      direction,
      style,
      justify: justifyContent,
      align: alignItems,
      wrap: flexWrap,
      fullWidth,
      hiddenXS,
      ...otherProps
    }: AppViewProps = this.props
    return (
      <ViewBase
        ref={(component: any) => (this.root = component)}
        nativeID={hiddenXS ? 'hiddenLayoutXS' : undefined}
        style={[
          BaseStyle.defaultStyle,
          backgroundColor && { backgroundColor },
          center && { justifyContent: 'center', alignItems: 'center' },
          type === 'constrained' && BaseStyle.constrained,
          direction && { flexDirection: direction },
          justifyContent && { justifyContent },
          alignItems && { alignItems },
          flexWrap && { flexWrap },
          fullWidth && { width: '100%' },
          style,
        ]}
        {...otherProps}
      />
    )
  }
}

export const Centered = (props: AppViewProps) => <AppView center {...props} />

export const Row = (props: AppViewProps) => (
  <AppView direction="row" {...props} />
)

export const MainContainer = (props: AppViewProps) => (
  <Centered
    style={[BaseStyle.mainContainer, props.style]}
    accessibilityRole="main"
    {...props}
  />
)

export const Main = (props: AppViewProps) => (
  <MainContainer>
    <Centered style={[BaseStyle.main, props.style]} {...props} />
  </MainContainer>
)

export const MainHead = (props: AppViewProps) => (
  <Centered style={[BaseStyle.mainHead, props.style]} {...props} />
)

export const Box = (props: AppViewProps & { noBorder?: boolean }) => (
  <Centered
    style={[
      BaseStyle.box,
      props.noBorder && { borderTopWidth: 0 },
      props.style,
    ]}
    fullWidth
    {...props}
  />
)

export const Grid = (props: AppViewProps) => (
  <AppView style={[BaseStyle.grid, props.style]} {...props} />
)

export const GridItem = (props: AppViewProps) => (
  <Centered style={[BaseStyle.gridItem, props.style]} {...props} />
)

export const BorderBox = (props: AppViewProps) => (
  <Centered style={[BaseStyle.borderBox, props.style]} {...props} />
)

export const HiddenXS = (props: AppViewProps) => (
  <AppView nativeID="hiddenLayoutXS" {...props} />
)

export const VisibleXS = (props: AppViewProps) => (
  <AppView nativeID="visibleLayoutXS" {...props} />
)
