import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapPin, Search, Star, ChevronRight } from "@/components/icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const ExploreTab = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock restaurant location pins
  const pins = [
    { id: "1", title: "Surulere Grill", x: 120, y: 220, rating: 4.8 },
    { id: "2", title: "Mama Put Center", x: 260, y: 150, rating: 4.5 },
    { id: "3", title: "ChopMap Food Van", x: 180, y: 340, rating: 4.9 },
  ];

  const [selectedPin, setSelectedPin] = useState(pins[2]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Search Input overlay */}
      <View className="absolute top-14 left-4 right-4 z-10">
        <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 shadow-md shadow-gray-200 border border-gray-100">
          <Search size={20} color="#9ca3af" />
          <TextInput
            placeholder="Search nearby food trucks & stalls..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-3 text-sm text-gray-800 font-semibold"
          />
        </View>
      </View>

      {/* High-fidelity Vector Map Mockup */}
      <View className="flex-1 bg-sky-50/40 relative justify-center items-center overflow-hidden">
        {/* Draw abstract grid streets */}
        <View className="absolute w-[200%] h-3 bg-white rotate-12 top-1/4 -left-1/4" />
        <View className="absolute w-[200%] h-3 bg-white -rotate-45 top-1/2 -left-1/4" />
        <View className="absolute w-[200%] h-3 bg-white rotate-45 top-2/3 -left-1/4" />
        <View className="absolute h-[200%] w-3 bg-white left-1/3 -top-1/2" />
        <View className="absolute h-[200%] w-3 bg-white left-2/3 -top-1/2" />
        
        {/* Abstract Green Areas / Parks */}
        <View className="absolute w-36 h-36 bg-emerald-50 rounded-full top-20 right-8 -z-10" />
        <View className="absolute w-44 h-44 bg-emerald-50 rounded-full bottom-36 left-4 -z-10" />

        {/* Location Pins */}
        {pins.map((pin) => {
          const isSelected = selectedPin.id === pin.id;
          return (
            <Pressable
              key={pin.id}
              onPress={() => setSelectedPin(pin)}
              style={{
                position: "absolute",
                left: pin.x,
                top: pin.y,
              }}
              className="items-center"
            >
              <View
                className={`w-10 h-10 rounded-full items-center justify-center shadow-lg ${
                  isSelected ? "bg-[#F27318] scale-110" : "bg-white"
                }`}
              >
                <MapPin size={20} color={isSelected ? "#ffffff" : "#F27318"} fill={isSelected ? "#ffffff" : "#F27318"} />
              </View>
              <View className="bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100 mt-1">
                <Text className="text-[10px] font-bold text-gray-800">{pin.title}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Bottom Popup Card for Selected Pin */}
      <View className="absolute bottom-6 left-4 right-4 bg-white rounded-3xl p-4 shadow-xl border border-gray-100">
        <View className="flex-row justify-between items-center">
          <View className="flex-1 mr-4">
            <View className="flex-row items-center mb-1">
              <Text className="text-base font-bold text-gray-900 mr-2">
                {selectedPin.title}
              </Text>
              <View className="flex-row items-center bg-orange-50 px-2 py-0.5 rounded-md">
                <Star size={10} color="#f59e0b" fill="#f59e0b" />
                <Text className="text-[10px] font-bold text-orange-600 ml-1">
                  {selectedPin.rating}
                </Text>
              </View>
            </View>
            <Text className="text-xs text-gray-500 mb-3" numberOfLines={1}>
              Active local kitchen • 48, Olukole Street, Surulere
            </Text>
            <Text className="text-xs text-[#F27318] font-bold">
              Affordable meals starting from ₦1,500
            </Text>
          </View>

          <Pressable
            onPress={() => router.push("/home")}
            className="w-12 h-12 bg-orange-50 rounded-2xl items-center justify-center"
          >
            <ChevronRight size={20} color="#F27318" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreTab;
