import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import H1 from "../../src/components/Text/H1";
import TextUI from "../../src/components/Text/TextUI";
import Tagline from "../../src/components/Text/Tagline";
import Colors from "../constants/Colors";
import RestaurantCard from "./Card/RestaurantCard";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { useDispatch, useSelector } from "react-redux";


export default ({ navigation }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const userSelector = useSelector((state) => state.user);
  
  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        setRestaurantList(res.data.result);
        console.log()
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCard = ({ item }) => {
    return <RestaurantCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ff2ff",
      }}
    ><SafeAreaView />
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        height: 50,
      }}
    >
      <View
        style={{
          justifyContent: "flex-end",
          alignSelf: "center",
          marginStart: 340,
        }}
      >
        <Text style={{ color: "black" }}>
          {"Hallo " + userSelector.username}
        </Text>
      </View>
    </View>
      <FlatList
        contentContainerStyle={{ marginTop: 46 }}
        data={restaurantList}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
