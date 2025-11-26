import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useBooking } from "../context/BookingContext";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Confirmation">;

const ConfirmationScreen: React.FC<Props> = ({ navigation }) => {
  const { selectedRoom, guests, checkIn, checkOut, resetBooking } =
    useBooking();

  const calculateNights = () => {
    if (!checkIn || !checkOut) {
      return 1;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();

    if (Number.isNaN(diff) || diff <= 0) {
      return 1;
    }

    return Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const total = selectedRoom ? selectedRoom.pricePerNight * nights : 0;

  const handleFinish = () => {
    resetBooking();
    navigation.reset({
      index: 0,
      routes: [{ name: "Details", params: { roomId: "suite-skyline" } }],
    });
  };

  if (!selectedRoom) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg text-slate-500">
          No booking selected yet.
        </Text>
        <TouchableOpacity
          className="mt-4 rounded-full bg-brand-500 px-6 py-3"
          onPress={() => navigation.navigate("Details", { roomId: "suite-skyline" })}
        >
          <Text className="text-base font-semibold text-white">Browse stays</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white px-5 pt-12">
      <Text className="text-base uppercase tracking-[0.2em] text-brand-500">
        Booking summary
      </Text>
      <Text className="mt-3 text-3xl font-bold text-slate-900">
        {selectedRoom.title}
      </Text>
      <Text className="text-sm text-slate-500">{selectedRoom.location}</Text>

      <View className="mt-8 rounded-3xl bg-slate-50 p-5">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-sm text-slate-500">Guests</Text>
          <Text className="text-base font-semibold text-slate-900">
            {guests} {guests === 1 ? "guest" : "guests"}
          </Text>
        </View>
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-sm text-slate-500">Check-in</Text>
          <Text className="text-base font-semibold text-slate-900">
            {checkIn || "Not set"}
          </Text>
        </View>
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-sm text-slate-500">Check-out</Text>
          <Text className="text-base font-semibold text-slate-900">
            {checkOut || "Not set"}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-slate-500">Nights</Text>
          <Text className="text-base font-semibold text-slate-900">
            {nights}
          </Text>
        </View>
      </View>

      <View className="mt-6 rounded-3xl bg-slate-900 p-5">
        <Text className="text-sm uppercase tracking-widest text-slate-300">
          Total
        </Text>
        <Text className="mt-2 text-4xl font-bold text-white">
          ${total.toFixed(0)}
        </Text>
        <Text className="text-sm text-slate-300">
          ${selectedRoom.pricePerNight} x {nights} night
          {nights > 1 ? "s" : ""}
        </Text>
      </View>

      <TouchableOpacity
        className="mt-10 rounded-full bg-brand-600 py-4"
        onPress={handleFinish}
      >
        <Text className="text-center text-lg font-semibold text-white">
          Confirm & Return Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;

