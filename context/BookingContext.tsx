import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Room, rooms } from "../data/rooms";

type BookingState = {
  selectedRoom?: Room;
  guests: number;
  checkIn: string;
  checkOut: string;
};

type BookingContextValue = BookingState & {
  selectRoom: (roomId: string) => void;
  updateGuests: (count: number) => void;
  updateDates: (dates: { checkIn: string; checkOut: string }) => void;
  resetBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | undefined>(
  undefined
);

const DEFAULT_STATE: BookingState = {
  guests: 2,
  checkIn: "",
  checkOut: "",
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bookingState, setBookingState] = useState<BookingState>(DEFAULT_STATE);

  const selectRoom = useCallback((roomId: string) => {
    const room = rooms.find((item) => item.id === roomId);
    setBookingState((prev) => ({
      ...prev,
      selectedRoom: room,
    }));
  }, []);

  const updateGuests = useCallback((count: number) => {
    setBookingState((prev) => ({
      ...prev,
      guests: Math.max(1, count),
    }));
  }, []);

  const updateDates = useCallback(
    (dates: { checkIn: string; checkOut: string }) => {
      setBookingState((prev) => ({
        ...prev,
        ...dates,
      }));
    },
    []
  );

  const resetBooking = useCallback(() => {
    setBookingState(DEFAULT_STATE);
  }, []);

  const value = useMemo(
    () => ({
      ...bookingState,
      selectRoom,
      updateGuests,
      updateDates,
      resetBooking,
    }),
    [bookingState, selectRoom, updateGuests, updateDates, resetBooking]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextValue => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }

  return context;
};

