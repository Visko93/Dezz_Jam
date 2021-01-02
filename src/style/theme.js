import { DefaultTheme } from 'styled-components'

const colorPallet = {
  primary: '#390040',
  primaryLight: '#662D6B',
  primaryDark: '#1B001B',
  secondary: '#A0E02C',
  secondaryLight: '#D5FF64',
  secondaryDark: '#6CAE00',
  accent: '#FF76D7',
  light: '#FBFBFB',
  dark: '#2B302A',
  black: '#000000',
  gray: '#DDE0D5',
}

export const theme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    colorPallet,
  },

  light: {
    background: colorPallet.gray,
    pageFontColor: colorPallet.primaryDark,
    CardFontColor: colorPallet.secondaryDark,
    actionButtonBG: colorPallet.primary,
    innerBG: colorPallet.light,
  },
  dark: {
    background: colorPallet.black,
    pageFontColor: colorPallet.secondary,
    CardFontColor: colorPallet.accent,
    actionButtonBG: colorPallet.secondaryDark,
    innerBG: colorPallet.light,
  },
}
