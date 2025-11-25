import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, SafeAreaView, Text as RNText, View } from "react-native";
import BookingCard from "../components/BookingCard";
import { rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";
import { RootStackParamList } from "../types/navigation";

// Create a styled Text component with DM Sans font
const Text = (props: any) => (
  <RNText {...props} className={`font-sans ${props.className || ""}`} />
);

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { selectRoom } = useBooking();

  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-4">
      <View className="mt-8 mb-6">
        <Text className="text-base uppercase tracking-widest text-brand-500">
          Discover stays
        </Text>
        <Text className="text-3xl font-bold text-slate-900">
          Book your next escape
        </Text>
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BookingCard
            room={item}
            onSelect={() => {
              selectRoom(item.id);
              navigation.navigate("Details", { roomId: item.id });
            }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 64 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

