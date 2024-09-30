import { View, Text, Image } from "react-native";
import React from "react";
import Login from "../../components/Login";

const Search = () => {
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
      <Login />
    </View>
  );
};

export default Search;
