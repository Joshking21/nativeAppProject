import React from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { House, Search, Heart, User } from "@/components/icons";

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#F27318",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#f3f4f6",
          height: 65,
          paddingBottom: 10,
          paddingTop: 8,
          elevation: 8,
          shadowColor: "#000000",
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -3 },
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <House size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <Search size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused, color }) => (
            <Heart size={24} color={color} fill={focused ? "#F27318" : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <User size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          href: null, // Hides it from the tab bar
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

