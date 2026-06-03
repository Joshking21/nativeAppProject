import { Link } from "expo-router";
import React from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from "react-native";
import Cart from "../assets/cart.svg";
import Chopmap from "../assets/ChopMap.svg";
import Okada from "../assets/okada.svg";
import { Button, ButtonText } from "./ui/button";

const { width } = Dimensions.get("window");

type CarouselItem = {
  id: string;
  img: React.ReactNode;
  title: string;
  title1: string;
};

const data: CarouselItem[] = [
  {
    id: "1",
    img: <Chopmap width={168} height={206} />,
    title: "",
    title1: "",
  },
  {
    id: "2",
    img: <Cart width={275} height={248} />,
    title: "Eat within your budget",
    title1:
      "Tell us how much you have and we'll show you meals you can afford nearby",
  },
  {
    id: "3",
    img: <Okada width={275} height={248} />,
    title: "Food near you, instantly",
    title1: "Discover nearby food and order or pickup in minutes",
  },
];

const MyCarousel = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  // Track active page via an integer for simple component style triggers
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        // Calculate the current active page index cleanly based on current offset
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / width);
        if (index !== activeIndex && index >= 0 && index < data.length) {
          setActiveIndex(index);
        }
      },
    },
  );

  const renderItem: ListRenderItem<CarouselItem> = ({ item }) => (
    <View
      style={{ width: width }}
      className="rounded-3xl flex-1 justify-center items-center p-4"
    >
      {item.img}

      <View className="w-full items-start mt-4">
        <Text className="text-3xl font-semibold text-left">{item.title}</Text>
        <Text className="text-md text-left mt-2 text-typography-500">
          {item.title1}
        </Text>
      </View>

      {item.id === "3" && (
        <Link href="/profile" asChild>
          <Button
            variant="solid"
            size="xl"
            className="w-full mt-6 rounded-xl text-white bg-[#F27318] active:bg-[#C65A10] hover:bg-[#C65A10]"
            action="primary"
            // onPress={() => {
            //   console.log("jjj");
            // }}
          >
            <ButtonText>Get Started</ButtonText>
          </Button>
        </Link>
      )}
    </View>
  );

  return (
    <View className="flex-1 w-full justify-between pb-8">
      <FlatList
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
      <View className="flex-row justify-center items-center mt-4 h-4">
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          // Numeric animations work perfectly across both platform drivers
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          const isDotActive = index === activeIndex;

          return (
            <Animated.View
              key={index.toString()}
              style={{
                width: dotWidth,
                height: 8,
                borderRadius: 4,
                opacity,
                marginHorizontal: 4,
              }}
              // Dynamically apply the background color using NativeWind utilities
              className={isDotActive ? "bg-[#F27318]" : "bg-gray-300"}
            />
          );
        })}
      </View>
    </View>
  );
};

export default MyCarousel;
