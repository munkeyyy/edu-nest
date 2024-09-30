import { Stack } from "expo-router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from '@ui-kitten/components';
export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ApplicationProvider>
  );
}
