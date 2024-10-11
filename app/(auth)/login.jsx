import React from "react";
import Login from "../../components/Login";
import { Image, View } from "react-native";

const LoginComp = () => {
  return (
    <View style={{display:"flex", flexDirection:"column", gap:40, alignItems:"center", justifyContent:"center", paddingHorizontal:20,paddingVertical:150}}>
      <View
        style={{
          display: "flex",
          // marginVertical: 50,
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

export default LoginComp;
