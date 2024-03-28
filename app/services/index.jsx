import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, values) => {
  try {
    await AsyncStorage.setItem(key, values);
  } catch (error) {
    
  }
};

const getData = async (key) => {
  try {
    const values = await AsyncStorage.getItem(key);
    if (values !== null) {
      return values;
    }
  } catch (error) {}
};

export default {
  storeData,
  getData,
};
