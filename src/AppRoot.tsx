import React from "react";
import { ThemeProvider } from "styled-components/native";
import { appTheme } from "@theme/theme";
import RootNavigation from "@navigation/index";
import { StatusBar } from "expo-status-bar";
import { useFonts, Orbitron_700Bold } from "@expo-google-fonts/orbitron";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { View, ActivityIndicator } from "react-native";

export default function AppRoot() {
  const [loaded] = useFonts({ Orbitron_700Bold, Inter_400Regular });

  if (!loaded) {
    return (
      <View style={{ flex:1, backgroundColor:"#000", justifyContent:"center", alignItems:"center" }}>
        <ActivityIndicator color="#FF0028" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar style="light" />
      <RootNavigation />
    </ThemeProvider>
  );
}