import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const DashnoardLayouts = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <View className="bg-red-500 text-red-500" />,
        tabBarStyle: { backgroundColor: "blue" },
        tabBarActiveBackgroundColor: "red",
        tabBarActiveTintColor: "yellow",
        tabBarInactiveBackgroundColor: "green",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profilito",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              size={size}
              name="book"
              color={focused ? "#3b82f6" : "#9ca3af"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "FuckThatShit",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              size={size}
              name={focused ? "create" : "create-outline"}
              color={focused ? "#3b82f6" : "#9ca3af"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashnoardLayouts;
