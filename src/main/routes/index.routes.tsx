import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes as RoutesEnum } from "./enums/Routes";
import { manufactureWelcomeScreen } from "../screens";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={RoutesEnum.Welcome}
          component={manufactureWelcomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
