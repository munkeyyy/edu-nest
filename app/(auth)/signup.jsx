import React from "react";
import Signup from "../../components/Signup";
import { Image, View } from "react-native";
const SignupComp = () => {
  return (
    <View style={{display:"flex", flexDirection:"column", gap:40, alignItems:"center", justifyContent:"center", paddingHorizontal:30,paddingVertical:150}}>
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
      <Signup />
    </View>
  );
};

export default SignupComp;
