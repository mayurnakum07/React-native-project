import { Button, Text, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { client } from "../services/KindeConfig";
import services from "../services";
import { supabase } from "../services/SupabaseConfig";
export default function Page() {
  const router = useRouter();
  useEffect(() => {
    checkUserAuth();
    getCategory();
  });

  const checkUserAuth = async () => {
    const result = await services.getData("login");
    if (result !== "true") {
      router.replace("/login");
    }
  };

  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      await services.storeData("login", "false");
      router.replace("/login");
    }
  };

  const getCategory = async () => {
    const user = await client.getUserDetails();
    const { data, error } = await supabase
      .from("Category")
      .select("*")
      .eq("created_by", user.email);
    console.log("data", data);
  };

  return (
    <View className="items-center flex-1 p-5">
      <View className="flex-1 justify-center max-w-960">
        <Text className="text-7xl font-bold">Hello World</Text>
        <Button title="logOut" onPress={() => handleLogout()} />
      </View>
    </View>
  );
}
