import {navTheme} from '../core/theme';
import {StyleSheet} from 'react-native';
// Before for all that is used before user authenticates

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: 70,
    backgroundColor: '#2bc48a',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: navTheme.fonts.size.medium,
    color: navTheme.colors.white,
    fontFamily: navTheme.fonts.family.medium1,
    marginRight: 10,
  },
});

export const inputStyles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: 70,
    borderColor: navTheme.colors.border,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: navTheme.colors.border,
    borderRightWidth: 1,
    width: 65,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: navTheme.fonts.size.regular,
    fontFamily: navTheme.fonts.family.light2,
    color: navTheme.colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: '75%',
    height: 70,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  initialContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  initialText: {
    color: navTheme.colors.grey,
    fontSize: navTheme.fonts.size.regular,
    fontFamily: navTheme.fonts.family.light2,
  },
});

//
export const loginScreenStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },

  text: {
    fontFamily: navTheme.fonts.family.bold1,
    fontSize: navTheme.fonts.size.large,
    marginVertical: 10,
    color: navTheme.colors.primary,
  },
  forgotButton: {
    marginTop: 10,
  },
});
