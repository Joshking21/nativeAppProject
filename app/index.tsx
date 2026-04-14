import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Bell } from "@/components/icons";

const Home = () => {
  return (
    <View className=" dark:bg-black gap-6 p-5 flex font-bold ">
      <View className="flex  items-center pr-8 flex-row  ">
        <View className="flex  items-center flex-row w-full gap-3">
          <Image
            source={require("../assets/Jay.jpg")}
            // width={10}
            // height={10}
            // style={{ width: 40, height: 40, borderRadius:"10px"}}
            className="w-20 h-20 rounded-3xl"
            resizeMode="cover"
          />
          <Text className="text-primary font-semiBold text-2xl">
            Sovereign Ledger
          </Text>
        </View>
        <Bell size={24} className="text-yellow-400" />
        {/* <Text>Jjhkhudhsdiu</Text> */}
      </View>
      <View className=" mb-5">
        <Text className="text-green-600 font-extrabold text-xs tracking-widest uppercase">
          Overview
        </Text>
        <Text className="text-black dark:text-white text-2xl font-bold">
          Morning, Oga
        </Text>
      </View>
      <View className=" ">
        <Text className="text-green-600 font-extrabold text-xs tracking-normal">
          Today's Sales
        </Text>
        <Text className="text-black dark:text-white text-2xl font-bold">
          428,500 
        </Text>
      </View>
      <Image
        source={require("../assets/Jay.jpg")}
        className="w-40 h-40 rounded-lg"
        resizeMode="contain"
      />
      <Link href={"/login"} className="dark:text-white">
        {" "}
        Login Page
      </Link>

      <Link href={"/about"} className="dark:text-white">
        {" "}
        About Page
      </Link>
      <Link href={"/profile"} className="dark:text-white">
        {" "}
        Profile Page
      </Link>
    </View>
  );
};

export default Home;
