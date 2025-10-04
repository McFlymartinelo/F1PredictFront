import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/Home/HomeScreen";
import CalendarScreen from "@screens/Calendar/CalendarScreen";
import GrandPrixScreen from "@screens/GrandPrix/GrandPrixScreen";
import PredictionsScreen from "@screens/Predictions/PredictionsScreen";
import LeaderboardScreen from "@screens/Leaderboard/LeaderboardScreen";
import ProfileScreen from "@screens/Profile/ProfileScreen";
import QuizScreen from "@screens/Quiz/QuizScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#FF0028"
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="speedometer" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Calendrier"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Pronostics"
        component={PredictionsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Classement"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="podium" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={Tabs} />
        <Stack.Screen name="GrandPrix" component={GrandPrixScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}