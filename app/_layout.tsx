import '@/global.css';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreen } from "react-native-screens";
import { Colors } from "../constants/colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { House, Settings, Users, Wallet } from "@/components/icons";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode="dark">
      <SafeAreaView className="flex-1 justify-center bg-white">
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
      <Stack
          screenOptions={{
            headerShown: false, // Hides the standard top native navigation bar
          }}
        >
          {/* Your individual entry directory targets */}
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(dashboard)" />
        </Stack>
      {/* <Tabs
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => <View className="bg-red-500 text-red-500" />,
          // tabBarStyle: { backgroundColor: "blue" },
          tabBarActiveBackgroundColor: "red",
          tabBarActiveTintColor: "yellow",
          tabBarInactiveBackgroundColor: "green",
        }}
      > */}
        {/* <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, size, color }) => (
              <House size={size} color={focused ? "#3b82f6" : "#9ca3af"} />
            ),
          }}
        />
        <Tabs.Screen
          name="(dashboard)"
          options={{
            title: "Wallet",
            tabBarIcon: ({ focused, size, color }) => (
              <Wallet size={size} color={focused ? "#3b82f6" : "#9ca3af"} />
            ),
          }}
        /> */}

        {/* <Tabs.Screen
          name="(auth)"
          options={{
            title: "Debtors",
            tabBarIcon: ({ focused, size, color }) => (
              <Users size={size} color={focused ? "#3b82f6" : "#9ca3af"} />
            ),
          }}
        /> */}
        {/* <Tabs.Screen
          name="about"
          // options={{
          //   title: "Settings",
          //   tabBarIcon: ({ focused, size, color }) => (
          //     <Settings size={size} color={focused ? "#3b82f6" : "#9ca3af"} />
          //   ),
          // }}
        /> */}
      {/* </Tabs> */}

      {/* <Text>Footer</Text> */}
    </SafeAreaView>
    </GluestackUIProvider>
  
  );
};

export default RootLayout;
