import React, {createContext} from 'react';
import {NavigationRef} from './Routes';
export const AuthContext = createContext();

// This function is used to navigation outside the provide
function navigate(name, params) {
  if (NavigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    NavigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export default class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: null,

      message: {
        visible: false,
        error: false,
        message: null,
      },
    };
  }

  executeAnError(error, rawError, fromWhichFunction) {
    if (!error) error = 'Sorry! There was an error';

    this.setState({process: null});

    this.setState({
      error: true,
      visible: true,
      message: error,
    });

    //While in development mode, we also want to console the raw error
    if (__DEV__) {
      console.log(`From :::${fromWhichFunction} function -->${rawError}`);
    }
    //
  }

  render() {
    // This Ref is imported from Route, we can route to any SCREENS with this
    // We shall need to navigation from register to congrats page

    //
    //

    return (
      <AuthContext.Provider
        value={{
          process: this.state.process,

          message: this.state.message,

          setMessage: (e = false, v = false, m = null) =>
            this.setState({
              message: {
                visible: v,
                error: e,
                message: m,
              },
            }),
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
