export type FacilityTiming = {
  day: string;
  start: string;
  end: string;
};

export type Review = {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  text: string;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  code?: string;
  discount?: number;
};

export type Room = {
  id: string;
  title: string;
  subtitle: string;
  pricePerNight: number;
  rating: number;
  ratingCount: number;
  amenities: string[];
  facilities: string[];
  about: string;
  policies: string[];
  timings: FacilityTiming[];
  verified?: boolean;
  image: string;
  location: string;
  address: string;
  sports?: string[];
  selectedSport?: string;
  playerFormat?: string;
  turfImage?: string | any;
  offers?: Offer[];
  reviews?: Review[];
  mapImage?: string;
};

export const rooms: Room[] = [
  {
    id: "suite-skyline",
    title: "Xciteplay Club",
    subtitle: "Perfect spot for football and cricket lovers",
    pricePerNight: 1200,
    rating: 4.5,
    ratingCount: 15,
    amenities: ["King bed", "Balcony", "Workspace", "Complimentary breakfast"],
    facilities: ["Parking", "Water", "Ball", "Night Light"],
    about:
      "Xciteplay Club is the perfect spot for football and cricket lovers to bring their game.",
    policies: [
      "Check-in with photo ID",
      "No smoking indoors",
      "Pets allowed on request",
    ],
    timings: [
      { day: "Monday", start: "06:00 PM", end: "07:00 PM" },
      { day: "Tuesday", start: "04:00 PM", end: "05:00 PM" },
      { day: "Friday", start: "08:00 PM", end: "09:00 PM" },
    ],
    verified: true,
    image:
      "https://images.unsplash.com/photo-1575361204480-05eef3c9c297?w=1200&q=80",
    location: "KT Nagar, Nagpur",
    address: "516/A, Katol Rd, KT Nagar, Nagpur, Maharashtra 440013",
    sports: ["Foot Ball", "Cricket", "Pickle Ball"],
    selectedSport: "Foot Ball",
    playerFormat: "7v7",
    turfImage: require("../assets/images/turf.png") as any,
    offers: [
      {
        id: "firstbook",
        title: "FIRSTBOOK",
        description: "Get a 20% Offer on your first turf booking with Kixar App",
        discount: 20,
      },
    ],
    reviews: [
      {
        id: "1",
        userName: "Siva",
        rating: 5.0,
        date: "2 days ago • 22 Nov, 2025",
        text: "Hand On The Best And The Easiest Way Of Booking Turfs Just In Seconds And Within Your Hand !",
      },
      {
        id: "2",
        userName: "Kumar",
        rating: 5.0,
        date: "2 days ago • 22 Nov, 2025",
        text: "Hand On The Best And The Easiest Way Of Booking Turfs Just In Seconds And Within Your Hand !",
      },
    ],
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
  },
  {
    id: "retreat-coast",
    title: "Coastal Retreat",
    subtitle: "Steps away from the beach",
    pricePerNight: 240,
    rating: 4.7,
    ratingCount: 18,
    amenities: ["Queen bed", "Patio", "Kitchenette", "Wi-Fi 1Gbps"],
    facilities: ["Parking", "Water", "Private beach", "Sunset deck"],
    about:
      "A breezy bungalow moments from the shoreline. Enjoy private yoga sessions, chef-prepared breakfasts, and seamless beach access.",
    policies: ["No parties", "Quiet hours after 10PM", "Pet friendly"],
    timings: [
      { day: "Monday", start: "07:00 AM", end: "09:00 PM" },
      { day: "Saturday", start: "06:00 AM", end: "11:00 PM" },
    ],
    verified: true,
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&q=80",
    location: "Laguna Beach, California",
    address: "230 Cliff Dr, Laguna Beach, CA 92651",
    sports: ["Foot Ball", "Cricket"],
    selectedSport: "Foot Ball",
    playerFormat: "5v5",
    turfImage: require("../assets/images/turf.png") as any,
    offers: [
      {
        id: "beach20",
        title: "BEACH20",
        description: "Get a 15% discount on beachside bookings",
        discount: 15,
      },
    ],
    reviews: [
      {
        id: "3",
        userName: "Alex",
        rating: 4.5,
        date: "1 week ago • 15 Nov, 2025",
        text: "Great location and excellent facilities. Highly recommended!",
      },
    ],
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
  },
  {
    id: "villa-oasis",
    title: "Oasis Villa",
    subtitle: "Private pool & garden",
    pricePerNight: 410,
    rating: 5.0,
    ratingCount: 54,
    amenities: ["Private pool", "2 Bedrooms", "Outdoor shower", "Chef service"],
    facilities: ["Parking", "Water", "Spa", "Night light"],
    about:
      "Immersed in a lush Balinese garden, the villa fuses modern comforts with artisan craftsmanship plus a dedicated concierge for on-demand excursions.",
    policies: [
      "Security deposit required",
      "Smoking only in outdoor spaces",
      "Chef services on reservation",
    ],
    timings: [
      { day: "Monday", start: "06:00 PM", end: "07:00 PM" },
      { day: "Sunday", start: "11:00 AM", end: "04:00 PM" },
    ],
    verified: true,
    image:
      "https://images.unsplash.com/photo-1505692794400-7fef0d581b49?w=1200&q=80",
    location: "Ubud, Bali",
    address: "Jalan Sri Wedari, Br. Tegallantang, Ubud",
    sports: ["Foot Ball", "Cricket", "Pickle Ball"],
    selectedSport: "Cricket",
    playerFormat: "11v11",
    turfImage: require("../assets/images/turf.png") as any,
    offers: [
      {
        id: "villa15",
        title: "VILLA15",
        description: "Special 15% off for villa bookings this month",
        discount: 15,
      },
    ],
    reviews: [
      {
        id: "4",
        userName: "Sarah",
        rating: 5.0,
        date: "3 days ago • 20 Nov, 2025",
        text: "Amazing experience! The facilities are top-notch and the staff is very helpful.",
      },
    ],
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
  },
];

