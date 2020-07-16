import React, { useState, Alert } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button/Button";
import LoginBG from "../../assets/images/login_bg.png";
import DarkOverlay from "../components/General/DarkOverlay";
import TextUI from "../components/Text/TextUI";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 34,
    height:50,
  },
  loginText: {
    marginTop: 12,
  },
});

export default (props) => {
const dispatch = useDispatch();
  const logoutBtnHandler = () => { 
    AsyncStorage.removeItem("userData")
    .then( result =>{
       dispatch({
        type:"USER_LOGOUT"
       }) 
    })
    .catch()
  };

  return (
    <ImageBackground source={LoginBG} style={{ ...styles.bgImage }}>
      <DarkOverlay />
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>
              Log Out
            </TextUI>            
            <Button
              onPress={logoutBtnHandler}
              containerStyle={{ marginTop: 40 }}
              size="lg"
            >LOGOUT
            </Button>
          </View>
        </KeyboardAvoidingView>
    </ImageBackground>
  );
};
