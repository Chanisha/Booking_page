# 🏟️ Xciteplay Club - Sports Court Booking App

> **Internship Assignment Project**

A modern, responsive mobile application for booking sports courts and facilities. Built with React Native, Expo, and TypeScript, featuring a clean UI with DM Sans typography and seamless booking experience.

This project was developed as part of an internship assignment to demonstrate proficiency in React Native development, UI/UX design, and mobile app architecture.

![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue)
![Expo](https://img.shields.io/badge/Expo-54.0.25-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![NativeWind](https://img.shields.io/badge/NativeWind-4.2.1-green)

## 📱 Features

### ✨ Core Functionality

- **Club Details View**: Comprehensive information about sports facilities
- **Interactive Booking Flow**: Date, time, court, and player selection
- **Real-time Pricing**: Dynamic price calculation based on player count
- **Image Carousel**: Multiple images showcasing the facility
- **Map Integration**: Location view with direction functionality
- **Reviews & Ratings**: User reviews and ratings display
- **Offers & Discounts**: Special offers with countdown timers

### 🎨 UI/UX Features

- **Modern Design**: Clean, intuitive interface with rounded corners and shadows
- **DM Sans Typography**: Consistent font styling throughout the app
- **Responsive Layout**: Optimized for mobile devices
- **Smooth Navigation**: Seamless screen transitions
- **Visual Feedback**: Interactive buttons and touch states

## 🛠️ Tech Stack

### Core Technologies

- **React Native** (0.81.5) - Cross-platform mobile framework
- **Expo** (54.0.25) - Development platform and tooling
- **TypeScript** (5.9.2) - Type-safe JavaScript
- **NativeWind** (4.2.1) - Tailwind CSS for React Native
- **React Navigation** (7.x) - Navigation library

### Key Libraries

- `@expo/vector-icons` - Icon library (Feather, MaterialCommunityIcons)
- `react-native-safe-area-context` - Safe area handling
- `expo-image` - Optimized image component
- `expo-status-bar` - Status bar customization

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd booking_page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Run on your preferred platform**

   ```bash
   # Web
   npm run web

   # Android
   npm run android

   # iOS
   npm run ios
   ```

## 🚀 Usage

### Starting the App

The app opens directly to the **Xciteplay Club** details page, showcasing:

- Hero image carousel
- Club information and ratings
- Available sports and facilities
- Booking options

### Booking Flow

1. **View Details**: Browse club information, facilities, and reviews
2. **Select Date**: Choose from available dates in the calendar
3. **Choose Time**: Select time category (Morning, Noon, Evening, Twilight)
4. **Pick Court**: Select from available courts (Court A or Court B)
5. **Set Players**: Adjust player count with +/- buttons
6. **Review & Book**: View total price and proceed with booking

## 📁 Project Structure

```
booking_page/
├── assets/
│   └── images/          # Image assets (icons, photos, maps)
├── components/
│   └── BookingCard.tsx   # Reusable booking card component
├── context/
│   └── BookingContext.tsx # Global booking state management
├── data/
│   └── rooms.ts         # Club/facility data
├── screens/
│   ├── BookingDetailsScreen.tsx  # Main club details view
│   ├── BookingScreen.tsx          # Booking form screen
│   └── ConfirmationScreen.tsx     # Booking confirmation
├── types/
│   └── navigation.ts    # TypeScript navigation types
├── App.tsx              # Main app component
├── global.css           # Global styles with Tailwind
└── tailwind.config.js  # Tailwind configuration
```

## 🎯 Key Screens

### 1. Booking Details Screen

- **Hero Image**: Full-width image carousel with navigation dots
- **Club Information Card**:
  - Club name with verification badge
  - Rating and review count
  - Address with location pin
  - Action buttons (Get Direction, Call)
- **Tabs**: About and Policies sections
- **Timings Information**: Available time slots
- **Facilities**: List of available amenities
- **Sports & Types**: Available sports with turf preview
- **Offers**: Special discounts and promotions
- **Ratings & Reviews**: User feedback and ratings
- **Map View**: Location map with direction button
- **Booking Footer**: Price display and "Book Now" button

### 2. Booking Screen

- **Date Selection**: Calendar view for selecting booking date
- **Time Selection**:
  - Time category buttons (Morning, Noon, Evening, Twilight)
  - Time slot visualization with timeline
- **Court Selection**: Radio button selection for available courts
- **Player Count**: Adjustable counter for number of players
- **Price Summary**: Total price with per-player breakdown

### 3. Confirmation Screen

- Booking summary with all selected details
- Total price calculation
- Confirmation action

## 🎨 Design System

### Typography

- **Font Family**: DM Sans (applied globally)
- **Headings**: Bold, various sizes (2xl, xl, lg, base)
- **Body Text**: Regular weight, optimized for readability

### Colors

- **Primary**: Teal/Green (#10b981, #14b8a6)
- **Background**: White (#ffffff)
- **Text**: Slate shades (#0f172a, #1e293b, #64748b)
- **Accents**: Yellow stars, green verification badges

### Components

- Rounded corners (rounded-2xl, rounded-3xl)
- Shadow effects for depth
- Consistent spacing and padding
- Touch-friendly button sizes

## 📝 Configuration

### Navigation

The app uses React Navigation with the following routes:

- `Details`: Club details screen (initial route)
- `Booking`: Booking form screen

### Initial Route

The app opens directly to the Xciteplay Club details page:

```typescript
initialRouteName="Details"
initialParams={{ roomId: "suite-skyline" }}
```

## 🔧 Development

### Available Scripts

```bash
npm start      # Start Expo development server (port 8083)
npm run dev    # Alias for start
npm run web    # Run on web browser
npm run android # Run on Android emulator/device
npm run ios    # Run on iOS simulator/device
npm run lint   # Run ESLint
```

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Functional components with hooks

## 📸 Assets

### Images

- `xciteplay.jpg` - Main club hero image
- `turf.png` - Sports turf preview
- `verify.png` - Verification badge icon

## 🚧 Future Enhancements

Potential improvements:

- [ ] User authentication
- [ ] Payment integration
- [ ] Booking history
- [ ] Push notifications
- [ ] Social sharing
- [ ] Favorites/Wishlist
- [ ] Advanced filtering
- [ ] Multi-language support

## 📚 Learning Outcomes

This internship assignment helped me gain hands-on experience in:

- **React Native Development**: Building cross-platform mobile applications
- **State Management**: Implementing context API for global state
- **Navigation**: Setting up and managing screen navigation
- **UI/UX Design**: Creating modern, responsive user interfaces
- **TypeScript**: Writing type-safe code
- **Styling**: Using Tailwind CSS (NativeWind) for styling
- **Component Architecture**: Building reusable and maintainable components

## 🎓 Assignment Details

This project demonstrates:

- ✅ Complete booking flow implementation
- ✅ Responsive design for mobile devices
- ✅ Clean code architecture and organization
- ✅ TypeScript type safety
- ✅ Modern UI/UX patterns
- ✅ Image handling and optimization
- ✅ Navigation and routing

## 📝 Notes

This project was completed as part of an internship program to showcase mobile app development skills using React Native and Expo.

---

**Built with ❤️ using React Native and Expo**
