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
  const [usernameInput,setUsernameInput] = useState("");

  const dispatch = useDispatch();
// setusernameinput(text)
  const loginBtnHandler = () => { 
    if(usernameInput){
      AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          username : usernameInput,
        })
      )
    return dispatch({
      type: "USER_LOGIN",
      payload: {username : usernameInput},
      });
    }
  };

  return (
    <ImageBackground source={LoginBG} style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>
              Welcome
            </TextUI>
            <TextUI style={{ ...styles.loginText }}>
              Login to your account
            </TextUI>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                  fontSize: 17,
                  color: "white",
                  lineHeight: 19,
                }}
                placeholder="Username"
                value={usernameInput}
                onChangeText={(text) => setUsernameInput(text)}
              />
            </View>
            <Button
              onPress={loginBtnHandler}
              containerStyle={{ marginTop: 40 }}
              size="lg"
            >LOGIN
            </Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
