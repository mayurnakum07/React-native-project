import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import loginBg from "./../../assets/loginbg.png";
import { client } from "../services/KindeConfig";
import services from "../services";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      await services.storeData("login", 'true');
      router.replace("/")
    }
  };
  return (
    <View className="flex  items-center">
      <Image
        source={loginBg}
        className="w-[200px] h-[400px] mt-10 rounded-2xl"
        style={{ borderWidth: 5, borderColor: "black" }}
      />
      <View
        className="bg-[#8b42fc] w-[100%] h-[100%] p-5 rounded-t-3xl"
        style={{ marginTop: -30 }}
      >
        <Text className="text-3xl font-bold text-center text-white ">
          Personal Budget Planner
        </Text>
        <Text className="text-base text-center text-white mt-3">
          Stay on Track, Event by Event: Your Personal Budget Planner App!
        </Text>
        <TouchableOpacity
          onPress={() => handleSignIn()}
          className="bg-white p-4 rounded-full mt-4"
        >
          <Text className="text-center text-[#8b42fc]">Login/Signup</Text>
        </TouchableOpacity>
        <Text className="text-gray-200">
          * By login/signup you will agree to our terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default Login;
