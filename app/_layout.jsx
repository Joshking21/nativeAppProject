import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreen } from "react-native-screens";
import { Colors } from "../constants/colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(Colors[colorScheme], Colors.colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <SafeAreaView className="flex-1 justify-center  h-20">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "yellow ",
        }}
      >
        <Stack.Screen name="about" options={{ title: "About What?" }} />
      </Stack>
      <Text>Footer</Text>
    </SafeAreaView>
  );
};

export default RootLayout;
