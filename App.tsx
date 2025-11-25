import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BookingDetailsScreen from "./screens/BookingDetailsScreen";
import BookingScreen from "./screens/BookingScreen";
import HomeScreen from "./screens/HomeScreen";
import { BookingProvider } from "./context/BookingContext";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <BookingProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Details"
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Details"
              component={BookingDetailsScreen}
              initialParams={{ roomId: "suite-skyline" }}
            />
            <Stack.Screen name="Booking" component={BookingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </BookingProvider>
  );
}

