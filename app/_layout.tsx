import "../global.css";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack, Tabs} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreen } from "react-native-screens";
import { Colors } from "../constants/colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import Icon, { House } from "@/components/icons";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(Colors[colorScheme], Colors.colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <SafeAreaView className="flex-1 justify-center bg-red-400">
      {/* <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "yellow ",
        }}
      >
        <Stack.Screen name="about" options={{ title: "About What?"   }}/>

        <Stack.Screen
          name="(auth)"
          options={{ title: "About What?", headerShown: false }}
        />
        <Stack.Screen
          name="(dashboard)"
          options={{ title: "About What?", headerShown: false }}
        />
      </Stack> */}
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <View className="bg-red-500 text-red-500" />,
        // tabBarStyle: { backgroundColor: "blue" },
        tabBarActiveBackgroundColor: "red",
        tabBarActiveTintColor: "yellow",
        tabBarInactiveBackgroundColor: "green",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size, color }) => (
            <House
              size={size}
              name="house"
              color={focused ? "#3b82f6" : "#9ca3af"}
            />
          ),
        }}
      />
    </Tabs>

      {/* <Text>Footer</Text> */}
    </SafeAreaView>
  );
};

export default RootLayout;
