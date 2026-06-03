import { MapPin, Search } from "@/components/icons";
import { Input, InputField } from "@/components/ui/input";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Cart from "../../assets/cart.svg";

const Profile = () => {
  const handleProfile = () => console.log("Logging in...");
  const [budget, setBudget] = useState<number>(1500);
  const [category, setCategory] = useState<string>();

  return (
    <View className="h-screen w-screen bg-white p-3">
      {/* <StyledButton title="Sign In" onPress={handleProfile} /> */}

      <View className="flex justify-between   flex-row">
        <View className="flex flex-row items-center gap-2">
          <MapPin
            className=""
            fill="#F27318"
            // strokeWidth={0}
            size={32}
            // color="#C65A10"
          />
          <Text>Surulere, Lagos</Text>
        </View>
        <Cart width={24} height={24} className="rounded-full" />
      </View>
      <Input className="rounded-xl p-3">
        <Search />
        <InputField placeholder="What do you want to eat?"></InputField>
      </Input>

      <View>
        <Text> Your budget</Text>
        <View className="flex flex-row items-center gap-2 w-full">
          {[1500, 2000, 3000, 4000].map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setBudget(item)}
              className={
                budget == item
                  ? "bg-[#F27318] rounded-full w-[84px] h-[26px] items-center justify-center"
                  : "bg-[#F2F2F2] rounded-full w-[84px] h-[36px] items-center justify-center"
              }
            >
              <Text
                className={
                  budget == item
                    ? "text-white font-semibold text-center"
                    : "text-[#666666] font-semibold text-center"
                }
              >
                ₦{item.toLocaleString()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View>
        <Text> Categories</Text>
        <View className="flex flex-row items-center gap-2 w-full">
          {["Rice", "Swallow", "Drinks", "Snack"].map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setCategory(item)}
              className={
                category == item
                  ? "bg-[#F27318] rounded-full w-[84px] h-[26px] items-center justify-center"
                  : "bg-[#F2F2F2] rounded-full w-[84px] h-[36px] items-center justify-center"
              }
            >
              <Text
                className={
                  category == item
                    ? "text-white font-semibold text-center"
                    : "text-[#666666] font-semibold text-center"
                }
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Profile;
