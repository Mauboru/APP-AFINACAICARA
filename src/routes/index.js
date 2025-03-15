import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Welcome } from '../pages';
// import PrivateRoute from './PrivateRoute';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const [initialRoute, setInitialRoute] = useState('Welcome');

  // useEffect(() => {
  //   const checkUserAuth = async () => {
  //     const token = await AsyncStorage.getItem('token');
  //     setInitialRoute(token ? 'Home' : 'Welcome');
  //     setIsLoading(false);
  //   };
  //   checkUserAuth();
  // }, []);

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />

      {/* <Stack.Screen name="Home">
        {(props) => (
          <PrivateRoute navigation={props.navigation}>
            <Home {...props} />
          </PrivateRoute>
        )}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
}
