import { Image, Text as RNText, TouchableOpacity, View } from "react-native";
import { Room } from "../data/rooms";

// Create a styled Text component with DM Sans font
const Text = (props: any) => (
  <RNText {...props} className={`font-sans ${props.className || ""}`} />
);

type BookingCardProps = {
  room: Room;
  onSelect: () => void;
};

const BookingCard: React.FC<BookingCardProps> = ({ room, onSelect }) => {
  return (
    <TouchableOpacity
      className="mb-5 rounded-3xl bg-white p-4 shadow"
      onPress={onSelect}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: room.image }}
        className="h-48 w-full rounded-2xl"
        resizeMode="cover"
      />
      <View className="mt-4 flex-row items-center justify-between">
        <View className="flex-1 pr-2">
          <Text className="text-xl font-semibold text-slate-900">
            {room.title}
          </Text>
          <Text className="text-sm text-slate-500">{room.subtitle}</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg font-semibold text-brand-600">
            ${room.pricePerNight}
          </Text>
          <Text className="text-xs text-slate-500">per night</Text>
        </View>
      </View>
      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-sm font-medium text-slate-600">
          ⭐ {room.rating.toFixed(1)}
        </Text>
        <Text className="text-xs uppercase tracking-wide text-brand-600">
          View details
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookingCard;

