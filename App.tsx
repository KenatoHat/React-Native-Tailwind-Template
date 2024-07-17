import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-teal-500 ">
      <Text className="text-3xl text-white font-bold ">Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}