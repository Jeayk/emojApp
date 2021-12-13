import React from 'react';
import Tab from './Tabs';
import Setting from '@pages/tab/setting';
import Launch from '@pages/launch';
import {NavigationContainer} from '@react-navigation/native';
import createInterceptStack from './InterceptStack';

const Stack = createInterceptStack();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="launch">
        <Stack.Screen name="launch" component={Launch} />
        <Stack.Screen name="home" component={Tab} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackScreen;
