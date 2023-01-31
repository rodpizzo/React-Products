import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Products from "./screens/Products";
import Login from "./screens/Login";
import Info from "./screens/Info";

export default function RootVavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Products" component={Products}></Stack.Screen>
        <Stack.Screen name="Info" component={Info}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
