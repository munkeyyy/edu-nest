import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [auth, setAuth] = useState("");
  async function getToken() {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    setAuth(token);
  }
  useEffect(() => {
    getToken();
  }, []);
  return <Redirect href={auth?"/home":'/login'}/>
}
