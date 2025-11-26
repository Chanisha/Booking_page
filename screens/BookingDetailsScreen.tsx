import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import {
  Image,
  ImageBackground,
  Text as RNText,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useBooking } from "../context/BookingContext";
import { rooms } from "../data/rooms";
import { RootStackParamList } from "../types/navigation";

// Create a styled Text component with DM Sans font
const Text = (props: any) => (
  <RNText {...props} className={`font-sans ${props.className || ""}`} />
);

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const BookingDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { roomId } = route.params;
  const room = useMemo(() => rooms.find((item) => item.id === roomId), [roomId]);
  const { updateDates, selectRoom } = useBooking();
  const [activeTab, setActiveTab] = useState<"about" | "policies">("about");
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [currentImageIndex] = useState(0);

  // Automatically select the room when component mounts
  useEffect(() => {
    if (roomId) {
      selectRoom(roomId);
    }
  }, [roomId, selectRoom]);

  if (!room) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg text-slate-500">Room not found.</Text>
      </SafeAreaView>
    );
  }

  const timingSlot = room.timings?.[0];
  const currentSelectedSport = selectedSport || room.selectedSport || room.sports?.[0] || "";
  const totalImages = 6; // For carousel dots

  const handleContinue = () => {
    if (timingSlot) {
      updateDates({
        checkIn: `${timingSlot.day} ${timingSlot.start}`,
        checkOut: `${timingSlot.day} ${timingSlot.end}`,
      });
    }
    navigation.navigate("Booking");
  };

  // Facility icons mapping
  const getFacilityIcon = (facility: string) => {
    const lower = facility.toLowerCase();
    if (lower.includes("parking") || lower.includes("car")) return "car";
    if (lower.includes("water")) return "water";
    if (lower.includes("ball") || lower.includes("basketball")) return "basketball";
    if (lower.includes("night") || lower.includes("light")) return "lightbulb-on";
    return "checkbox-blank-circle-outline";
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Xciteplay Image Section - At Top */}
        {room.id === "suite-skyline" ? (
          <View className="relative w-full">
            <Image
              source={require("../assets/images/xciteplay.jpg")}
              className="w-full"
              style={{ height: 400 }}
              resizeMode="cover"
            />
            {/* Status Bar Overlay */}
            <View className="absolute top-0 left-0 right-0 h-12 flex-row items-center justify-between px-5">
              <Text className="text-xs font-semibold text-white">9:30</Text>
              <View className="flex-row items-center gap-1">
                <View className="h-1 w-1 rounded-full bg-white" />
                <View className="h-1 w-1 rounded-full bg-white opacity-50" />
              </View>
            </View>

            {/* Top Navigation Bar Overlay */}
            <View className="absolute top-12 left-0 right-0 flex-row items-center justify-between px-5 py-3">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="#fff" />
              </TouchableOpacity>
              <View className="flex-row items-center gap-4">
                <TouchableOpacity>
                  <Feather name="heart" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="share-2" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          /* Hero Image Section - For other rooms */
          <View className="relative h-[480px] w-full">
            <ImageBackground
              source={{ uri: room.image }}
              className="h-full w-full"
              resizeMode="cover"
            >
              {/* Status Bar Overlay */}
              <View className="absolute top-0 left-0 right-0 h-12 flex-row items-center justify-between px-5">
                <Text className="text-xs font-semibold text-white">9:30</Text>
                <View className="flex-row items-center gap-1">
                  <View className="h-1 w-1 rounded-full bg-white" />
                  <View className="h-1 w-1 rounded-full bg-white opacity-50" />
                </View>
              </View>

              {/* Top Navigation Bar Overlay */}
              <View className="absolute top-12 left-0 right-0 flex-row items-center justify-between px-5 py-3">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Feather name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <View className="flex-row items-center gap-4">
                  <TouchableOpacity>
                    <Feather name="heart" size={24} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="share-2" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Carousel Dots */}
              <View className="absolute bottom-4 left-0 right-0 flex-row items-center justify-center gap-2">
                {Array.from({ length: totalImages }).map((_, index) => (
                  <View
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImageIndex ? "bg-teal-500" : "bg-white"
                    }`}
                  />
                ))}
              </View>
            </ImageBackground>
          </View>
        )}

        {/* Club Information Card */}
        <View className={` bg-white p-5 shadow-lg ${room.id === "suite-skyline" ? "" : "-mt-8"}`}>
          <View className="flex-row items-start justify-between">
            <View className="flex-1 pr-4">
              <View className="flex-row items-center gap-2">
                <Text className="text-2xl font-bold text-slate-900">
                  {room.title}
                </Text>
                {room.verified && (
                  <Image
                    source={require("../assets/images/verify.png")}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                )}
              </View>
            </View>
            <View className="items-end">
              <View className="flex-row items-center gap-1">
                <MaterialCommunityIcons name="star" size={18} color="#facc15" />
                <Text className="text-base font-semibold text-slate-900">
                  {room.rating.toFixed(1)}
                </Text>
                <Text className="text-base font-semibold text-slate-500">
                  {" "}| {room.ratingCount} Ratings
                </Text>
              </View>
            </View>
          </View>

          {/* Address */}
          <View className="mt-4 flex-row items-start gap-3">
            <MaterialCommunityIcons name="map-marker" size={20} color="#0f172a" />
            <Text className="flex-1 text-sm leading-5 text-slate-600">
              {room.address}
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="mt-4 flex-row gap-3">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white py-3">
              <Text className="text-base font-semibold text-slate-900">
                Get Direction
              </Text>
              <Feather name="arrow-right" size={16} color="#0f172a" />
            </TouchableOpacity>
            <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white">
              <Feather name="phone" size={20} color="#0f172a" />
            </TouchableOpacity>
          </View>

          {/* Segmented Control - About/Policies */}
          <View className="mt-6 flex-row items-center gap-3">
            <TouchableOpacity
              className={`flex-1 rounded-full border-2 px-4 py-2.5 ${
                activeTab === "about"
                  ? "border-slate-900 bg-slate-900"
                  : "border-slate-200 bg-slate-100"
              }`}
              onPress={() => setActiveTab("about")}
            >
              <Text
                className={`text-center text-sm font-semibold ${
                  activeTab === "about" ? "text-white" : "text-slate-900"
                }`}
              >
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 rounded-full border-2 px-4 py-2.5 ${
                activeTab === "policies"
                  ? "border-slate-900 bg-slate-900"
                  : "border-slate-200 bg-slate-100"
              }`}
              onPress={() => setActiveTab("policies")}
            >
              <Text
                className={`text-center text-sm font-semibold ${
                  activeTab === "policies" ? "text-white" : "text-slate-900"
                }`}
              >
                Policies
              </Text>
            </TouchableOpacity>
          </View>

          {/* About/Policies Content */}
          <View className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            {activeTab === "about" ? (
              <View>
                <Text className="mb-2 text-sm font-semibold text-slate-900">
                  About &apos;{room.title}&apos;
                </Text>
                <Text className="text-sm leading-6 text-slate-600">
                  {room.about}
                </Text>
                <TouchableOpacity className="mt-2">
                  <Text className="text-sm font-semibold text-emerald-600">
                    read more
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="gap-2">
                {room.policies.map((policy) => (
                  <View key={policy} className="flex-row items-start gap-2">
                    <View className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <Text className="flex-1 text-sm leading-5 text-slate-600">
                      {policy}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Timings Information */}
        <View className=" bg-white p-5 shadow">
          <Text className="text-base font-semibold text-slate-900">
            Timings Information
          </Text>
          {timingSlot ? (
            <TouchableOpacity className="mt-4 flex-row items-center justify-between rounded-2xl border-2 border-slate-200 bg-white px-4 py-4">
              <Text className="text-base font-semibold text-slate-900">
                {timingSlot.day}
              </Text>
              <Text className="text-base font-semibold text-slate-900">
                {timingSlot.start} - {timingSlot.end}
              </Text>
              <Feather name="chevron-down" size={20} color="#0f172a" />
            </TouchableOpacity>
          ) : (
            <Text className="mt-4 text-sm text-slate-500">No slots listed</Text>
          )}
        </View>

        {/* Facilities */}
        <View className="bg-white p-5 shadow">
          <Text className="text-base font-semibold text-slate-900">
            Facilities
          </Text>
          <View className="mt-4 flex-row flex-wrap gap-3">
            {room.facilities.map((facility) => (
              <View
                key={facility}
                className="flex-row items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <MaterialCommunityIcons
                  name={getFacilityIcon(facility) as any}
                  size={18}
                  color="#0f172a"
                />
                <Text className="text-sm font-medium text-slate-700">
                  {facility}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Available Sports & Types */}
        {room.sports && room.sports.length > 0 && (
          <View className=" bg-white p-5 shadow">
            <Text className="text-base font-semibold text-slate-900">
              Available Sports & Types
            </Text>
            <View className="mt-4 flex-row gap-3">
              {room.sports.map((sport) => (
                <TouchableOpacity
                  key={sport}
                  onPress={() => setSelectedSport(sport)}
                  className={`flex-1 flex-row items-center justify-center gap-2 rounded-full border-2 px-4 py-3 ${
                    currentSelectedSport === sport
                      ? "border-slate-900 bg-slate-900"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <MaterialCommunityIcons
                    name={
                      sport === "Foot Ball"
                        ? "soccer"
                        : sport === "Cricket"
                        ? "cricket"
                        : "tennis"
                    }
                    size={18}
                    color={currentSelectedSport === sport ? "#fff" : "#0f172a"}
                  />
                  <Text
                    className={`text-sm font-semibold ${
                      currentSelectedSport === sport ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {sport}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {room.turfImage && (
              <View className="mt-4 items-center">
                <Image
                  source={typeof room.turfImage === 'string' ? { uri: room.turfImage } : room.turfImage}
                  style={{ width: 350, height: 300, maxWidth: 500, maxHeight: 500 }}
                  className="rounded-lg"
                  resizeMode="contain"
                />
                <Text className="-mt-12 text-lg font-bold text-slate-900">
                  Turf - {room.sports.join(" & ")}
                </Text>
                {room.playerFormat && (
                  <Text className="mt-2 text-sm text-slate-500">
                    {room.playerFormat}
                  </Text>
                )}
              </View>
            )}
          </View>
        )}

        {/* Offers */}
        {room.offers && room.offers.length > 0 && (
          <View className=" bg-white p-5 shadow">
            <Text className="text-base font-semibold text-slate-900">
              Offers
            </Text>
            {room.offers.map((offer) => (
              <View
                key={offer.id}
                className="mt-4 flex-row items-center gap-3 rounded-2xl bg-emerald-50 p-4"
              >
                <View className="h-12 w-12 items-center justify-center rounded-full bg-emerald-500">
                  <Text className="text-base font-bold text-white">%</Text>
                  <Text className="text-[9px] font-bold text-white leading-tight">
                    {offer.title || "OFF"}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="mb-1 text-sm font-bold text-slate-900">
                    {offer.title}
                  </Text>
                  <Text className="text-sm leading-5 text-slate-700">
                    {offer.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Ratings & Reviews */}
        {room.reviews && room.reviews.length > 0 && (
          <View className=" bg-white p-5 shadow">
            <Text className="text-base font-semibold text-slate-900">
              Ratings & Reviews
            </Text>
            <View className="mt-4 flex-row items-center gap-3">
              <View className="flex-row items-center rounded-full bg-teal-500 px-3 py-1.5">
                <MaterialCommunityIcons name="star" size={16} color="#facc15" />
                <Text className="ml-1 text-sm font-bold text-white">
                  {room.rating.toFixed(1)}
                </Text>
              </View>
              <Text className="text-sm text-slate-500">
                {room.ratingCount} Ratings | {room.reviews.length} Reviews
              </Text>
            </View>
            <View className="mt-4 gap-4">
              {room.reviews.slice(0, 2).map((review) => (
                <View key={review.id} className="flex-row gap-3">
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                    <Text className="text-sm font-semibold text-slate-600">
                      {review.userName.charAt(0)}
                    </Text>
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center gap-2">
                      <Text className="text-sm font-semibold text-slate-900">
                        {review.userName}
                      </Text>
                      <View className="flex-row items-center">
                        <MaterialCommunityIcons
                          name="star"
                          size={14}
                          color="#facc15"
                        />
                        <Text className="ml-1 text-xs font-semibold text-slate-900">
                          {review.rating.toFixed(1)}
                        </Text>
                      </View>
                    </View>
                    <Text className="mt-1 text-xs text-slate-500">
                      {review.date}
                    </Text>
                    <Text className="mt-2 text-sm leading-5 text-slate-600">
                      {review.text}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity className="mt-4">
              <Text className="text-center text-sm font-semibold text-teal-600">
                See All Reviews
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Map View */}
        {room.mapImage && (
          <View className=" bg-white p-5 shadow">
            <Text className="text-base font-semibold text-slate-900">
              Map View
            </Text>
            <View className="relative mt-4 overflow-hidden rounded-2xl">
              <Image
                source={{ uri: room.mapImage }}
                className="h-64 w-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-4 left-4 right-4">
                <TouchableOpacity className="flex-row items-center justify-center rounded-full bg-slate-900 py-3">
                  <Text className="text-base font-semibold text-white">
                    Get Direction
                  </Text>
                  <View className="ml-2">
                    <Feather name="arrow-right" size={16} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Fixed Bottom Booking CTA */}
      <View className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-5 pb-6 pt-4 shadow-lg">
        {room.offers && room.offers.length > 0 && (
          <View className="mb-3 flex-row items-center justify-center rounded-2xl bg-teal-100 px-4 py-2">
            <Text className="text-sm font-semibold text-teal-700">
              15% OFF ends in 01:50 s
            </Text>
          </View>
        )}
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-lg font-bold text-slate-900">
              ₹ {room.pricePerNight} / 1 hour
            </Text>
            <Text className="mt-1 text-xs text-slate-500">
              per player cost in next step
            </Text>
          </View>
          <TouchableOpacity
            className="ml-4 flex-row items-center rounded-full bg-teal-500 px-6 py-3"
            onPress={handleContinue}
          >
            <Text className="text-base font-semibold text-white">
              Book Now
            </Text>
            <View className="ml-2">
              <Feather name="arrow-right" size={16} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingDetailsScreen;
