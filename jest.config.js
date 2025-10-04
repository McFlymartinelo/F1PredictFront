module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-native-draggable-flatlist|react-native-reanimated|expo|@expo|expo-modules-core)/)"
  ]
};
