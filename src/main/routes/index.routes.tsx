import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { Routes as RoutesEnum } from "./enums/Routes";
import { ManufactureWelcomeScreen } from "../screens";
import { ManufactureExercisesScreen } from "../screens/exercises";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      >
        <Stack.Screen
          name={RoutesEnum.Welcome}
          component={ManufactureWelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.Exercises}
          component={ManufactureExercisesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
