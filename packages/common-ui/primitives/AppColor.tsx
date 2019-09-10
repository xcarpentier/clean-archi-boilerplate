/*
Color name suffix convention:
- T = more transparent
- D = more dark
- L = more light
 */
enum AppColor {
  transparent = 'transparent',

  primary = '#F9603C',
  primaryT = 'rgba(249, 96, 60, 0.8)',
  primaryTT = 'rgba(249, 96, 60, 0.5)',
  primaryTTT = 'rgba(249, 96, 60, 0.3)',
  primaryD = '#b96038',
  primaryDD = '#874229',

  black = '#181818',
  blackT = 'rgba(24, 24, 24, 0.8)',
  blackTT = 'rgba(24, 24, 24, 0.5)',
  blackTTT = 'rgba(24, 24, 24, 0.3)',
  blackInvisible = 'rgba(24, 24, 24, 0)',

  white = 'rgba(255, 255, 255, 1)',
  whiteT = 'rgba(255,255,255,.8)',
  whiteTT = 'rgba(255,255,255,.5)',
  whiteTTT = 'rgba(255,255,255,.2)',
  whiteTTTT = 'rgba(255,255,255,.03)',

  greyLLL = '#b9b9b9',
  greyLL = '#a5a5a5',
  greyL = '#919191',
  grey = '#7d7d7d',
  greyD = '#696969',
  greyDD = '#555555',
  greyDDD = '#414141',

  error = '#EC2434',
  success = '#27D9A1',

  shadow = 'rgba(30, 34, 45, 0.15)',
}

export default AppColor
