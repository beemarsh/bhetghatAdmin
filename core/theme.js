import {DefaultTheme} from '@react-navigation/native';

export const navTheme = {
  ...DefaultTheme,
  colors: {
    text: '#bbb',
    background: '#fff',

    primary: '#2bc48a',

    border: '#ccc',

    white: '#fff',
    grey: '#333',
  },
  fonts: {
    family: {
      bold1: 'Montserrat-Bold',
      bold2: 'Poppins-Bold',

      light1: 'Montserrat-Regular',
      light2: 'Poppins-Regular',

      medium1: 'Montserrat-Medium',
      medium2: 'Poppins-Medium',
    },

    size: {
      large: 30,

      big: 20,

      medium: 16,

      regular: 14,

      small: 12,
    },
  },
  dark: false,
};
