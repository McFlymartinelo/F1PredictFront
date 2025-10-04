import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ApiService } from "@services/api";
import { NeonText } from "@components/NeonText";
import { NeonButton } from "@components/NeonButton";

export default function GrandPrixScreen() {
  const route = useRoute<RouteProp<any, any>>();
  const { id } = route.params as { id: string };
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    ApiService.getGP(id).then(setData).catch(() => {});
  }, [id]);

  if (!data) {
    return <View style={{ flex:1, backgroundColor: "#000", justifyContent:"center", alignItems:"center" }}>
      <NeonText color="blue">Chargement...</NeonText>
    </View>;
  }

  return (
    <ScrollView style={{ flex:1, backgroundColor:"#000" }} contentContainerStyle={{ padding:16 }}>
      <NeonText color="red" style={{ fontSize:24 }}>{data.name}</NeonText>
      <NeonText glow={false} style={{ marginTop:6 }}>{data.circuitName} • {data.country}</NeonText>
      <NeonText glow={false} color="blue" style={{ marginTop:12 }}>Historique</NeonText>
      <NeonText glow={false} style={{ fontSize:12, marginTop:4 }}>{data.history || "À venir..."}</NeonText>
      <NeonButton title="Faire mes pronostics" style={{ marginTop: 24 }} onPress={() => {}} />
    </ScrollView>
  );
}