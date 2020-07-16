import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../../navigator/HomeStack"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "native-base";
import LogoutScreen from "../LogoutScreen";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor:Colors.primaryColor,
        style:{
            backgroundColor:"#ffffff",
            borderTopWidth:0,},
      }}
    >
    <Tab.Screen name="Home" component={HomeStack} 
      options={{
       tabBarIcon:({color,size})=>(<Icon type="Entypo" name="home" style={{color}} />)
      }}
    />
     
     <Tab.Screen name="LogOut" component={LogoutScreen}
        options={{
          tabBarIcon:({color,size})=>(<Icon type="Feather" name="log-out" style={{color}}/>)
        }} 
     />
    </Tab.Navigator>
  );
};
