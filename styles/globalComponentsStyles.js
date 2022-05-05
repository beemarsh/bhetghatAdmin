import {StyleSheet} from 'react-native';
import {navTheme} from '../core/theme';

// This is the style for the snackbar where message will be displayed
export const SnackBarStyles = StyleSheet.create({
  snackbarStyle: {
    paddingVertical: 5,
    borderRadius: 18,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontFamily: navTheme.fonts.family.medium2,
    fontSize: navTheme.fonts.size.regular,
    color: navTheme.colors.white,
    marginLeft: 10,
    width: 250,
    height: '100%',
  },
  snackBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 40,
  },
  dismiss: {
    fontFamily: navTheme.fonts.family.medium2,
    fontSize: navTheme.fonts.size.regular,
    color: navTheme.colors.white,
  },
});
