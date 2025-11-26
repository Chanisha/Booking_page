import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Text as RNText,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useBooking } from "../context/BookingContext";
import { RootStackParamList } from "../types/navigation";

// Create a styled Text component with DM Sans font
const Text = (props: any) => (
  <RNText {...props} className={`font-sans ${props.className || ""}`} />
);

type Props = NativeStackScreenProps<RootStackParamList, "Booking">;

const BookingScreen: React.FC<Props> = ({ navigation }) => {
  const { selectedRoom } = useBooking();
  const [selectedDate, setSelectedDate] = useState<number>(24);
  const [selectedTimeCategory, setSelectedTimeCategory] = useState<
    "morning" | "noon" | "evening" | "twilight"
  >("noon");
  const [selectedCourt, setSelectedCourt] = useState<"A" | "B">("B");
  const [playerCount, setPlayerCount] = useState(5);
  const [selectedTimeSlot] = useState({
    start: "12:00 PM",
    end: "01:00 PM",
  });

  // Calendar dates for November 2025
  const calendarDates = [
    { day: "MON", date: 24, available: true },
    { day: "TUE", date: 25, available: true },
    { day: "WED", date: 26, available: true },
    { day: "THU", date: 27, available: true },
    { day: "FRI", date: 28, available: true },
    { day: "SAT", date: 29, available: true },
    { day: "SUN", date: 30, available: true },
  ];

  const timeCategories = [
    { id: "morning", label: "Morning", icon: "weather-partly-cloudy", slots: 4 },
    { id: "noon", label: "Noon", icon: "weather-sunny", slots: 4 },
    { id: "evening", label: "Evening", icon: "weather-sunset", slots: 2 },
    { id: "twilight", label: "Twilight", icon: "weather-night", slots: 1 },
  ];

  const timeSlots = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  const pricePerPlayer = 240;
  const totalPrice = playerCount * pricePerPlayer;

  const handleNext = () => {
    // No action - button does nothing
  };

  const handleDecreasePlayers = () => {
    if (playerCount > 1) {
      setPlayerCount(playerCount - 1);
    }
  };

  const handleIncreasePlayers = () => {
    setPlayerCount(playerCount + 1);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Status Bar */}
      <View className="h-12 flex-row items-center justify-between bg-white px-5">
        <Text className="text-xs font-semibold text-slate-900">9:30</Text>
        <View className="flex-row items-center gap-1">
          <View className="h-1 w-1 rounded-full bg-slate-900" />
          <View className="h-1 w-1 rounded-full bg-slate-900 opacity-50" />
        </View>
      </View>

      {/* Top Navigation Bar */}
      <View className="flex-row items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#0f172a" />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-slate-900">
          {selectedRoom?.title || "Xciteplay Club"}
        </Text>
        <View className="w-6" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Select Date Section */}
        <View className="mx-5 mt-6">
          <Text className="text-base font-semibold text-slate-900">
            Select Date
          </Text>
          <View className="mt-4 flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-teal-600">
              November 2025
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="arrow-expand"
                size={24}
                color="#0f172a"
              />
            </TouchableOpacity>
          </View>
          <View className="mt-4 flex-row gap-2">
            {calendarDates.map((item) => (
              <TouchableOpacity
                key={item.date}
                onPress={() => setSelectedDate(item.date)}
                className={`flex-1 items-center rounded-xl py-3 ${
                  selectedDate === item.date
                    ? "bg-teal-500"
                    : "bg-slate-100"
                }`}
              >
                <Text
                  className={`text-xs font-medium ${
                    selectedDate === item.date
                      ? "text-white"
                      : "text-slate-500"
                  }`}
                >
                  {item.day}
                </Text>
                <Text
                  className={`mt-1 text-base font-semibold ${
                    selectedDate === item.date
                      ? "text-white"
                      : "text-slate-700"
                  }`}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Select Time Section */}
        <View className="mx-5 mt-8">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-slate-900">
              Select Time
            </Text>
            <Text className="text-xs text-slate-500">
              8 slots available for today.
            </Text>
          </View>

          {/* Time Category Buttons */}
          <View className="mt-4 flex-row flex-wrap gap-3">
            {timeCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() =>
                  setSelectedTimeCategory(
                    category.id as "morning" | "noon" | "evening" | "twilight"
                  )
                }
                className={`flex-1 min-w-[45%] flex-row items-center gap-2 rounded-xl border-2 px-4 py-3 ${
                  selectedTimeCategory === category.id
                    ? "border-slate-900 bg-slate-900"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <MaterialCommunityIcons
                  name={category.icon as any}
                  size={20}
                  color={
                    selectedTimeCategory === category.id ? "#fff" : "#0f172a"
                  }
                />
                <Text
                  className={`flex-1 text-sm font-semibold ${
                    selectedTimeCategory === category.id
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {category.label}
                </Text>
                <View
                  className={`h-5 w-5 items-center justify-center rounded-full ${
                    selectedTimeCategory === category.id
                      ? "bg-white"
                      : "bg-slate-200"
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      selectedTimeCategory === category.id
                        ? "text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {category.slots}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Selected Time Range */}
          <View className="mt-4">
            <Text className="text-sm font-semibold text-slate-900">
              {selectedTimeSlot.start} - {selectedTimeSlot.end}
            </Text>

            {/* Time Slider */}
            <View className="mt-4">
              <View className="flex-row items-center justify-between">
                {timeSlots.map((time) => (
                  <View key={time} className="flex-1 items-center">
                    <Text className="text-xs text-slate-500">{time}</Text>
                  </View>
                ))}
              </View>
              <View className="relative mt-3">
                {/* Background line */}
                <View className="absolute left-0 right-0 top-2 h-1 bg-teal-200" />
                {/* Selected segment */}
                <View
                  className="absolute top-2 h-1.5 bg-slate-900"
                  style={{
                    left: "25%",
                    width: "25%",
                  }}
                />
                {/* Time markers with A labels */}
                <View className="flex-row items-center justify-between">
                  {timeSlots.map((time, index) => {
                    const startIndex = timeSlots.findIndex(
                      (t) => t === selectedTimeSlot.start
                    );
                    const endIndex = timeSlots.findIndex(
                      (t) => t === selectedTimeSlot.end
                    );
                    const isSelected = index === startIndex || index === endIndex;
                    return (
                      <View key={time} className="items-center">
                        {isSelected && (
                          <Text className="mb-1 text-xs font-semibold text-slate-900">
                            A
                          </Text>
                        )}
                        <View className="h-2 w-2" />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Select Cricket Court Section */}
        <View className="mx-5 mt-8">
          <Text className="text-base font-semibold text-slate-900">
            Select Cricket Court
          </Text>
          <View className="mt-4 flex-row gap-3">
            {(["A", "B"] as const).map((court) => (
              <TouchableOpacity
                key={court}
                onPress={() => setSelectedCourt(court)}
                className={`flex-1 flex-row items-center gap-3 rounded-xl border-2 px-4 py-3 ${
                  selectedCourt === court
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <View
                  className={`h-5 w-5 items-center justify-center rounded-full border-2 ${
                    selectedCourt === court
                      ? "border-teal-500 bg-teal-500"
                      : "border-slate-300"
                  }`}
                >
                  {selectedCourt === court && (
                    <View className="h-2 w-2 rounded-full bg-white" />
                  )}
                </View>
                <Text
                  className={`text-sm font-semibold ${
                    selectedCourt === court
                      ? "text-teal-600"
                      : "text-slate-700"
                  }`}
                >
                  Court {court}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Select Players Count Section */}
        <View className="mx-5 mt-8">
          <Text className="text-base font-semibold text-slate-900">
            Select Players Count
          </Text>
          <View className="mt-4 flex-row items-center justify-between rounded-xl border-2 border-slate-200 bg-white px-6 py-4">
            <TouchableOpacity
              onPress={handleDecreasePlayers}
              className="h-10 w-10 items-center justify-center rounded-full bg-slate-100"
            >
              <Text className="text-xl font-semibold text-slate-900">-</Text>
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-slate-900">
              {playerCount} Players
            </Text>
            <TouchableOpacity
              onPress={handleIncreasePlayers}
              className="h-10 w-10 items-center justify-center rounded-full bg-slate-100"
            >
              <Text className="text-xl font-semibold text-slate-900">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Footer */}
      <View className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-5 pb-6 pt-4 shadow-lg">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-xl font-bold text-slate-900">
              ₹ {totalPrice}
            </Text>
            <Text className="mt-1 text-xs text-slate-500">
              | ₹{pricePerPlayer} per player
            </Text>
            <TouchableOpacity className="mt-1">
              <Text className="text-sm font-semibold text-teal-600">
                View Price Breakup
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleNext}
            className="ml-4 flex-row items-center rounded-full bg-teal-500 px-6 py-3"
          >
            <Text className="text-base font-semibold text-white">Next</Text>
            <View className="ml-2">
              <Feather name="arrow-right" size={16} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;

