import { View, Text, Image } from "react-native";
import React from "react";
import Svg from "../../assets/Updated_Siksha_Nest_Logo.svg";
import Signup from "../../components/Signup";
import Login from "../../components/Login";
const Home = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          marginVertical: 50,
          justifyContent: "center",
          alignItems: "center",
          // height: 100,
        }}
      >
        <Image
          source={require("../../assets/siksha.png")}
          style={{ height: 55, width: 123 }}
        />
      </View>
      <Signup />
    </View>
  );
};

export default Home;
