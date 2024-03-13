import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View className="items-center flex-1 p-5">
      <View className="flex-1 justify-center max-w-960 ">
        <Text className="text-7xl font-bold">Hello World</Text>
        <Text className="text-4xl">This is the first page of your app.</Text>
      </View>
    </View>
  );
}
