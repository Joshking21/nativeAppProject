import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { MapPin, User, ChevronRight, Wallet, Settings, Bell } from "@/components/icons";
import { useApp } from "../../context/AppContext";

const ProfileTab = () => {
  const router = useRouter();
  const { address, setAddress, clearCart } = useApp();
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState(address);

  const handleSaveAddress = () => {
    if (tempAddress.trim() === "") {
      Alert.alert("Error", "Address cannot be empty.");
      return;
    }
    setAddress(tempAddress);
    setIsEditingAddress(false);
  };

  const handleLogout = () => {
    clearCart();
    // Navigate back to the onboarding index
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFB] px-4 pt-3">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-extrabold text-gray-900 mb-6">Profile</Text>

        {/* User Card */}
        <View className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm items-center mb-6">
          <Image
            source={require("../../assets/Jay.jpg")}
            className="w-24 h-24 rounded-full mb-3 border border-gray-200"
          />
          <Text className="text-lg font-bold text-gray-900">James Adeshola</Text>
          <Text className="text-sm text-gray-400">james.adeshola@example.com</Text>
        </View>

        {/* Wallet Balance Card */}
        <View className="bg-[#F27318] rounded-3xl p-5 shadow-md shadow-orange-500/20 flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-orange-100 text-xs font-bold uppercase mb-1">
              ChopMap Wallet
            </Text>
            <Text className="text-white text-2xl font-extrabold">₦12,500.00</Text>
          </View>
          <View className="bg-white/20 p-3 rounded-2xl">
            <Wallet size={24} color="#ffffff" />
          </View>
        </View>

        {/* Delivery Address Section */}
        <View className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-sm font-bold text-gray-800">Default Delivery Address</Text>
            <Pressable
              onPress={() => {
                if (isEditingAddress) {
                  handleSaveAddress();
                } else {
                  setTempAddress(address);
                  setIsEditingAddress(true);
                }
              }}
              className="bg-orange-50 px-3 py-1 rounded-md"
            >
              <Text className="text-xs font-bold text-[#F27318]">
                {isEditingAddress ? "Save" : "Edit"}
              </Text>
            </Pressable>
          </View>

          {isEditingAddress ? (
            <View className="flex-row items-center border border-gray-200 rounded-xl px-3 py-2">
              <MapPin size={18} color="#F27318" />
              <TextInput
                value={tempAddress}
                onChangeText={setTempAddress}
                className="flex-1 ml-2 text-sm text-gray-800 font-semibold"
                autoFocus
              />
            </View>
          ) : (
            <View className="flex-row items-start">
              <MapPin size={18} color="#F27318" className="mt-0.5" />
              <Text className="text-sm font-semibold text-gray-600 ml-2 flex-1 leading-5">
                {address}
              </Text>
            </View>
          )}
        </View>

        {/* Settings Links */}
        <View className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          {[
            { label: "My Account Details", icon: <User size={20} color="#6b7280" /> },
            { label: "Notifications Settings", icon: <Bell size={20} color="#6b7280" /> },
            { label: "App Preferences", icon: <Settings size={20} color="#6b7280" /> },
          ].map((item, index) => (
            <Pressable
              key={index}
              className={`flex-row items-center justify-between p-4 ${
                index !== 2 ? "border-b border-gray-50" : ""
              }`}
            >
              <View className="flex-row items-center gap-3">
                {item.icon}
                <Text className="text-sm font-bold text-gray-700">{item.label}</Text>
              </View>
              <ChevronRight size={16} color="#9ca3af" />
            </Pressable>
          ))}
        </View>

        {/* Log Out Button */}
        <Pressable
          onPress={handleLogout}
          className="w-full border border-red-200 active:bg-red-50 py-4 rounded-2xl items-center justify-center mb-12"
        >
          <Text className="text-red-500 text-base font-bold">Log Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
