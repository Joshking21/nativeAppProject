import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { MapPin, Search, Heart, Star, Bell, ShoppingCart } from "@/components/icons";
import { useApp, mockMeals, Meal } from "../../context/AppContext";
import Jay from "../"

const { width } = Dimensions.get("window");

const HomeTab = () => {
  const router = useRouter();
  const {
    budget,
    setBudget,
    category,
    setCategory,
    savedMeals,
    toggleSaveMeal,
    address,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState("");

  const budgets = [1500, 2000, 2500, 3000];
  const categories = [
    { name: "Rice", emoji: "🍚" },
    { name: "Swallow", emoji: "🍲" },
    { name: "Drinks", emoji: "🍹" },
    { name: "Snacks", emoji: "🍔" },
  ];

  // Filter meals based on:
  // 1. Price <= selected budget
  // 2. Category matches selected category (case-insensitive)
  // 3. Search query matches title
  const filteredMeals = mockMeals.filter((meal) => {
    const matchesBudget = meal.price <= budget;
    const matchesCategory = meal.category === category;
    const matchesSearch = meal.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesBudget && matchesCategory && matchesSearch;
  });

  const handleMealPress = (meal: Meal) => {
    router.push({
      pathname: "/detail",
      params: { id: meal.id },
    });
  };

  const navigateToCart = () => {
    router.push("/cart");
  };

  const renderMealCard = ({ item }: { item: Meal }) => {
    const isSaved = savedMeals.includes(item.id);

    return (
      <Pressable
        onPress={() => handleMealPress(item)}
        className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex-1 m-2"
        style={{ maxWidth: (width - 48) / 2 }}
      >
        {/* Meal Image */}
        <View className="relative w-full h-36">
          <Image
            source={{ uri: item.image }}
            className="w-full h-full object-cover"
            transition={300}
          />
          {/* Favorite Badge */}
          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              toggleSaveMeal(item.id);
            }}
            className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full items-center justify-center shadow-sm"
          >
            <Heart
              size={18}
              color={isSaved ? "#ef4444" : "#9ca3af"}
              fill={isSaved ? "#ef4444" : "none"}
            />
          </Pressable>
        </View>

        {/* Meal Details */}
        <View className="p-3">
          <Text className="text-sm font-bold text-gray-900 mb-1" numberOfLines={1}>
            {item.title}
          </Text>
          
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-orange-500 font-extrabold text-sm">
              ₦{item.price.toLocaleString()}
            </Text>
            
            <View className="flex-row items-center">
              <Star size={12} color="#f59e0b" fill="#f59e0b" />
              <Text className="text-xs text-gray-500 ml-1 font-semibold">
                {item.rating}({item.reviews})
              </Text>
            </View>
          </View>

          {/* Distance */}
          <View className="flex-row items-center mt-1">
            <MapPin size={12} color="#6b7280" />
            <Text className="text-xs text-gray-400 ml-1">{item.distance}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFB]">
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-3">
        {/* Top Header Row */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <MapPin size={24} color="#F27318" fill="#F27318" />
            <View className="ml-2">
              <Text className="text-xs text-gray-400 font-medium">Deliver to</Text>
              <Text className="text-sm font-bold text-gray-800">{address}</Text>
            </View>
          </View>

          {/* Profile Image & Notification Badge */}
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={navigateToCart}
              className="bg-white w-10 h-10 rounded-full items-center justify-center shadow-sm border border-gray-100"
            >
              <ShoppingCart size={20} className="text-gray-600" />
            </Pressable>
            <View className="relative">
              <Image
                source={require("../../assets/Jay.jpg")}
                className="w-11 h-11 rounded-full border border-gray-200"
              />
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mb-6">
          <Search size={20} color="#9ca3af" />
          <TextInput
            placeholder="What do you want to eat?"
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-3 text-sm text-gray-800 font-medium"
          />
        </View>

        {/* Your Budget */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-900 mb-3">Your budget</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {budgets.map((item) => {
              const isActive = budget === item;
              return (
                <Pressable
                  key={item}
                  onPress={() => setBudget(item)}
                  className={`px-5 py-2.5 rounded-full ${
                    isActive ? "bg-[#F27318]" : "bg-gray-100"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold ${
                      isActive ? "text-white" : "text-gray-600"
                    }`}
                  >
                    ₦{item.toLocaleString()}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Categories */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-900 mb-3">Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
          >
            {categories.map((item) => {
              const isActive = category === item.name;
              return (
                <Pressable
                  key={item.name}
                  onPress={() => setCategory(item.name)}
                  className={`flex-row items-center px-4 py-3 rounded-2xl border ${
                    isActive
                      ? "border-[#F27318] bg-orange-50/10"
                      : "border-transparent bg-gray-100"
                  }`}
                >
                  <Text className="text-lg mr-2">{item.emoji}</Text>
                  <Text
                    className={`text-sm font-bold ${
                      isActive ? "text-[#F27318]" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Cheap Meals Section */}
        <View className="mb-8">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Cheap meals near you
          </Text>

          {filteredMeals.length === 0 ? (
            <View className="py-12 items-center justify-center">
              <Text className="text-gray-400 font-medium text-center">
                No meals found under ₦{budget.toLocaleString()} for {category}.
              </Text>
            </View>
          ) : (
            <FlatList
              data={filteredMeals}
              renderItem={renderMealCard}
              keyExtractor={(item) => item.id}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeTab;
