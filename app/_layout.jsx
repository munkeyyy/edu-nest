import { Stack } from "expo-router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthProvider } from "../context/AuthContext";
import Signup from "./../components/Signup";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [auth, setAuth] = useState("");
  async function getToken() {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    setAuth(token);
  }
  useEffect(() => {
    getToken();
  }, []);
  return (
    <AuthProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="index" /> */}
          {auth ? (
            <><Stack.Screen name="(tabs)" /><Stack.Screen name="(authenticated)" /></>
          ) : (
            <Stack.Screen name="(auth)" />
          )}
        </Stack>

      </ApplicationProvider>
    </AuthProvider>
  );
}
