import React from "react";
import {
  ScrollView,
  Text,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { MapPin, Heart, Star } from "@/components/icons";
import { useApp, mockMeals, Meal } from "../../context/AppContext";

const { width } = Dimensions.get("window");

const SavedTab = () => {
  const router = useRouter();
  const { savedMeals, toggleSaveMeal } = useApp();

  // Filter mock meals by saved list
  const favoritedMeals = mockMeals.filter((meal) =>
    savedMeals.includes(meal.id)
  );

  const handleMealPress = (meal: Meal) => {
    router.push({
      pathname: "/detail",
      params: { id: meal.id },
    });
  };

  const renderSavedCard = ({ item }: { item: Meal }) => {
    return (
      <Pressable
        onPress={() => handleMealPress(item)}
        className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex-row p-3 mb-4 items-center"
      >
        {/* Meal Image */}
        <Image
          source={{ uri: item.image }}
          className="w-24 h-24 rounded-2xl object-cover"
        />

        {/* Meal Info */}
        <View className="flex-1 ml-4 justify-between">
          <View>
            <View className="flex-row justify-between items-start">
              <Text className="text-base font-bold text-gray-900 flex-1 mr-2" numberOfLines={1}>
                {item.title}
              </Text>
              <Pressable
                onPress={(e) => {
                  e.stopPropagation();
                  toggleSaveMeal(item.id);
                }}
                className="w-8 h-8 rounded-full items-center justify-center bg-red-50"
              >
                <Heart size={16} color="#ef4444" fill="#ef4444" />
              </Pressable>
            </View>

            <View className="flex-row items-center mt-1">
              <Star size={12} color="#f59e0b" fill="#f59e0b" />
              <Text className="text-xs text-gray-500 ml-1 font-semibold">
                {item.rating}({item.reviews})
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-[#F27318] font-extrabold text-base">
              ₦{item.price.toLocaleString()}
            </Text>
            <View className="flex-row items-center">
              <MapPin size={12} color="#9ca3af" />
              <Text className="text-xs text-gray-400 ml-1">{item.distance}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFB] px-4 pt-3">
      <Text className="text-2xl font-extrabold text-gray-900 mb-6">Saved Meals</Text>

      {favoritedMeals.length === 0 ? (
        <View className="flex-1 justify-center items-center px-8 pb-20">
          <View className="bg-orange-50 w-20 h-20 rounded-full items-center justify-center mb-6">
            <Heart size={36} color="#F27318" />
          </View>
          <Text className="text-lg font-bold text-gray-800 text-center mb-2">
            No saved meals yet
          </Text>
          <Text className="text-sm text-gray-400 text-center leading-5">
            Browse through cheap meals on the Home tab and tap the heart icon to save them for later!
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoritedMeals}
          renderItem={renderSavedCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

export default SavedTab;
