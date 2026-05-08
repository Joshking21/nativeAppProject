import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Bell, PlusCircle } from "@/components/icons";
import StyledButton from "@/components/button";
import Recent from "@/components/recent";
import Assets from "@/components/assets";

const Home = () => {
  return (
    <View className="flex-1 bg-zinc-50 dark:bg-zinc-950 text-2xl">
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
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
              <Text className="text-secondary font-semiBold text-2xl">
                Sovereign Ledger
              </Text>
            </View>
            <Bell size={24} className="text-yellow-400" />
            {/* <Text>Jjhkhudhsdiu</Text> */}
          </View>
          <View className=" mb-5">
            <Text className="text-neutral font-extrabold text-xs tracking-widest uppercase">
              Overview
            </Text>
            <Text className="text-black dark:text-white text-[3rem] font-bold">
              Morning, Oga JayBobo
            </Text>
          </View>
          <View className=" bg-primary p-4 flex gap-5 rounded-xl">
            <View>
              <Text className="text-secondary font-extrabold text-xs tracking-normal">
                Today's Sales
              </Text>
              <Text className="text-white bg-red-400 dark:text-white text-[3rem] tracking-widest font-semiBold">
                428,500 <Text className="text-sm">+12%</Text>
              </Text>
            </View>
            <View className="w-full flex items-start bg-red-300">
              <StyledButton title="Details" variant="outline" className=" " />
            </View>
          </View>
          <View className=" bg-green-500 p-4 flex gap-6 rounded-xl">
            <View>
              <Text className="text-green-600 font-extrabold text-sm tracking-normal">
                Total Debt
              </Text>
              <Text className="text-red-500 text-[3rem] font-semiBold">
                184,200
                {/* <Text className="text-sm">+12%</Text> */}
              </Text>
            </View>
            <View className="w-full flex-row  justify-end  ">
              <StyledButton
                title="Remind All"
                variant="link"
                className="justify-self-end "
              />
            </View>
          </View>

          <Recent />

          <Assets />

          {/* <Image
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
      </Link> */}
        </View>
      </ScrollView>
      <View className="flex items-end absolute bottom-10 right-6 z-50">
        <Link href="href" className="bg-green-800 p-5 rounded-xl shadow-md">
          <PlusCircle className="text-white" size={24} />
        </Link>
      </View>
    </View>
  );
};

export default Home;
