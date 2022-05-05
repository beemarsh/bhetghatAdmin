import React, {useContext, useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import Loading from '../screens/Loading';
import ActionNotification from '../components/ActionNotification';
import {navTheme} from '../core/theme';

// This Provides access to the navigate functions from all over the places
// We just need to import this to any place and just navigate
export const NavigationRef = createNavigationContainerRef();

export default function () {
  // To keep track for autheticating data from Firebase; whether the authentication is going on or is done

  const {user} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  //
  useEffect(() => {
    setInitializing(false);
  }, []);

  //
  // If its intializing then you can show a loader or display nothing
  if (initializing) {
    // return <PreLoading />;
    return <Loading />;
  } else {
    return (
      <NavigationContainer theme={navTheme} ref={NavigationRef}>
        {user ? <AppStack /> : <AuthStack />}
        {/* It is a snackbar which is used to show actions
        eg: when an item is added to cart we say : Dish stg has been added to cart
        */}
        <ActionNotification />
      </NavigationContainer>
    );
  }
}
