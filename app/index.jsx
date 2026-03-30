import "../global.css";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import jay from "../assets/Jay.jpg";
import { Link } from "expo-router";

const Home = () => {
  return (
    
      <View className="p-8 dark:bg-black flex justify-center text-center items-center font-bold ">
        <Text className="text-red-800 dark:text-gray-200  justify-center text-center mb-5">
          Hi My Name's Joshua... aannnnddd i think I'm losing it. buuutt.. who
          cares?
        </Text>
        <Image
          source={jay}
          className="w-40 h-40 rounded-lg"
          resizeMode="contain"
        />
        <Link href={"/about"} className="dark:text-white"> about Page</Link>
      </View>
    
  );
};

export default Home;
