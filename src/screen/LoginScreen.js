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
import { Icon } from "native-base";


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
    // <ImageBackground source={LoginBG} style={{ ...styles.bgImage }}>
      // <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        > 
        <View>
            <Text
              style={{
                fontSize: 50,
                textAlign: "center",
                fontWeight: "bold",
                color: "#ff704d",
              }}
            >
              Tomato App
            </Text>
            <Icon
              type="MaterialCommunityIcons"
              name="food"
              style={{
                color: "#ff704d",
                fontSize: 100,
                textAlign: "center",
              }}
            />
          </View>

          <View style={{ ...styles.contentContainer }}>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "flex-start",
                marginTop: 58,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  fontSize: 17,
                  lineHeight: 19,
                  backgroundColor: "black",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
            />
            
            <TextInput
                autoCapitalize="none"
                placeholderTextColor="black"
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
            >
              LOGIN
            </Button>
          </View>
          
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
};
