// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Block expo-router from being resolved
config.resolver.blockList = [
  /node_modules\/expo-router\/.*/,
];

module.exports = withNativeWind(config, { input: './global.css' });
