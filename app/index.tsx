import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "../global.css"
export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white ">
      <Text className="text-3xl text-black font-bold ">Hello Kenato!</Text>
      <StatusBar style="auto" />
    </View>
  );
}