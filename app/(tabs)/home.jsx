import { View, Text, Image, Button } from "react-native";
import React from "react";
import Svg from "../../assets/Updated_Siksha_Nest_Logo.svg";
import Signup from "../../components/Signup";
import Login from "../../components/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";
const Home = () => {
  const { logout } = useAuth();
  const router = useRouter();
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
      <Text>Home</Text>
      <Button onPress={async()=>{
        await AsyncStorage.removeItem('token');
      
        logout();
        router.replace('/login')
      }} title="Click"></Button>
    </View>
  );
};

export default Home;
