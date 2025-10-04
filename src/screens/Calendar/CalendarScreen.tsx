import React, { useEffect } from "react";
import { View, FlatList, Pressable } from "react-native";
import { useCalendarStore } from "@state/useCalendarStore";
import { NeonText } from "@components/NeonText";
import { useNavigation } from "@react-navigation/native";

const CalendarScreen: React.FC = () => {
  const { grandPrix, fetchCalendar, loading } = useCalendarStore();
  const navigation = useNavigation<any>();

  useEffect(() => {
    fetchCalendar();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 16 }}>
      <NeonText color="red" style={{ fontSize: 24, marginBottom: 12 }}>Saison</NeonText>
      <FlatList
        data={grandPrix}
        refreshing={loading}
        onRefresh={fetchCalendar}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("GrandPrix", { id: item.id })}
            style={{
              backgroundColor: "#1C1C1C",
              padding: 14,
              borderRadius: 12,
              marginBottom: 12
            }}
          >
            <NeonText color="blue" style={{ fontSize: 16 }}>{item.round}. {item.name}</NeonText>
            <NeonText glow={false} color="white" style={{ fontSize: 12, marginTop: 4 }}>{item.startDate} - {item.endDate} • {item.country}</NeonText>
            <NeonText color="red" glow={false} style={{ fontSize: 11, marginTop: 4 }}>{item.status.toUpperCase()}</NeonText>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CalendarScreen;