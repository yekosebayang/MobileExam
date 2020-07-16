import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import MainTab from "../screen/Tab/MainTab";
import LoginScreen from "../screen/LoginScreen";
import LogoutScreen from "../screen/LogoutScreen";

const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  useEffect((storageItem) => {
    console.log(storageItem)
    AsyncStorage.getItem("userData")   
      .then((storageItem) => {
        console.log(storageItem);
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(storageItem),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSelector.login ? (
          <Stack.Screen options={{ animationEnabled: false }} name="MainTab" component={MainTab}/>
        ) : (
          <Stack.Screen name="LogIn" component={LoginScreen}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
