import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItem,
  Pressable,
  Text,
  View,
} from "react-native";
import Cart from "../assets/cart.svg";
import Chopmap from "../assets/ChopMap.svg";
import Okada from "../assets/okada.svg";

const { width } = Dimensions.get("window");

type CarouselItem = {
  id: string;
  img: React.ReactNode;
  title: string;
  description: string;
};

const data: CarouselItem[] = [
  {
    id: "1",
    img: <Chopmap width={180} height={220} />,
    title: "",
    description: "",
  },
  {
    id: "2",
    img: <Cart width={280} height={250} />,
    title: "Eat within your budget",
    description:
      "Tell us how much you have and we'll show you meals you can afford nearby",
  },
  {
    id: "3",
    img: <Okada width={280} height={250} />,
    title: "Food near you, instantly",
    description: "Discover nearby food and order or pickup in minutes.",
  },
];

const MyCarousel = () => {
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / width);
        if (index !== activeIndex && index >= 0 && index < data.length) {
          setActiveIndex(index);
        }
      },
    },
  );

  const handleNext = () => {
    flatListRef.current?.scrollToIndex({ index: 2, animated: true });
  };

  const renderItem: ListRenderItem<CarouselItem> = ({ item, index }) => (
    <View
      style={{ width: width }}
      className="flex-1 justify-between items-center px-6 pt-16 pb-2"
    >
      {/* Top spacing & Illustration */}
      <View className="flex-1 justify-center items-center">{item.img}</View>

      {/* Description Content & Buttons */}
      {item.id !== "1" ? (
        <View className="w-full mb-12">
          <Text className="text-3xl font-extrabold text-gray-900 text-left mb-3">
            {item.title}
          </Text>
          <Text className="text-base text-gray-500 text-left leading-6 mb-8">
            {item.description}
          </Text>

          {item.id === "3" && (
            <Link href="/home" asChild>
              <Pressable className="w-full bg-[#F27318] active:bg-[#C65A10] h-14 rounded-2xl items-center justify-center shadow-md shadow-orange-500/20">
                <Text className="text-white text-lg font-bold">
                  Get Started
                </Text>
              </Pressable>
            </Link>
          )}
        </View>
      ) : (
        // For splash/slide 1, we just render an empty view to preserve vertical alignment
        <View className="w-full mb-16 h-36" />
      )}
    </View>
  );

  return (
    <View className="flex-1 w-full justify-between pb-8 bg-white">
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Pagination Dots container */}
      <View className="flex-row justify-center items-center mt-2 h-4">
        {data.map((_, index) => {
          const isDotActive = index === activeIndex;
          return (
            <View
              key={index.toString()}
              className={`h-2 rounded-full mx-1 ${
                isDotActive ? "w-6 bg-[#F27318]" : "w-2 bg-gray-300"
              }`}
            />
          );
        })}
      </View>
    </View>
  );
};

export default MyCarousel;
