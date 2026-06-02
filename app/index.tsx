import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Image } from "expo-image";

import { Bell, PlusCircle } from "@/components/icons";
import StyledButton from "@/components/button";
import Recent from "@/components/recent";
import Assets from "@/components/assets";
import MyCarousel from "@/components/carousel";
import ChopMapLogo from "../assets/ChopMap.svg";
import Cart from "../assets/cart.svg";
const Home = () => {
  return (
    <View className="flex-1 items-center flex justify-center text-2xl">
      {/* <Image
        source={require("../assets/ChopMap.svg")} // ✅ direct require
        style={{ width: 200, height: 200 }}
      /> */}
      
      <MyCarousel />
    </View>
  );
};

export default Home;
