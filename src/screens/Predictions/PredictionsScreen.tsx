import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { NeonText } from "@components/NeonText";
import { PodiumDragList } from "@components/PodiumDragList";
import { NeonButton } from "@components/NeonButton";
import { usePredictionStore } from "@state/usePredictionStore";
import { useAuthStore } from "@state/useAuthStore";
import { useCalendarStore } from "@state/useCalendarStore";

const dummyDrivers = [
  { id: "VER", code: "VER", name: "Max Verstappen" },
  { id: "HAM", code: "HAM", name: "Lewis Hamilton" },
  { id: "LEC", code: "LEC", name: "Charles Leclerc" },
  { id: "NOR", code: "NOR", name: "Lando Norris" },
  { id: "ALO", code: "ALO", name: "Fernando Alonso" }
];

const PredictionsScreen: React.FC = () => {
  const { grandPrix } = useCalendarStore();
  const active = grandPrix.find(g => g.status === "upcoming" || g.status === "live");
  const { predictions, setLocalPrediction, savePrediction, saving } = usePredictionStore();
  const { firebaseUser } = useAuthStore();
  const [podiumData, setPodiumData] = useState(dummyDrivers);

  useEffect(() => {
    if (!active) return;
    const pred = predictions[active.id];
    if (pred?.podium?.length) {
      const sorted = pred.podium.map(id => dummyDrivers.find(d => d.id === id)!).filter(Boolean);
      setPodiumData(sorted.concat(dummyDrivers.filter(d => !pred.podium.includes(d.id))));
    }
  }, [active, predictions]);

  if (!active) {
    return <View style={{ flex:1, backgroundColor:"#000", justifyContent:"center", alignItems:"center" }}>
      <NeonText color="blue">Pas de Grand Prix actif</NeonText>
    </View>;
  }

  const onChangeOrder = (orderIds: string[]) => {
    setLocalPrediction(active.id, {
      userId: firebaseUser?.uid || "",
      grandPrixId: active.id,
      podium: orderIds.slice(0,3)
    });
  };

  const save = () => {
    if (!active) return;
    savePrediction(active.id).catch(() => {});
  };

  const pred = predictions[active.id];

  return (
    <ScrollView style={{ flex:1, backgroundColor:"#000" }} contentContainerStyle={{ padding:16 }}>
      <NeonText color="red" style={{ fontSize:24 }}>Pronostics - {active.name}</NeonText>
      <NeonText glow={false} style={{ marginTop:12, fontSize:14 }}>Podium (glisser / déposer)</NeonText>
      <View style={{ height: 340, marginTop: 12 }}>
        <PodiumDragList
          data={podiumData}
          onChange={onChangeOrder}
        />
      </View>
      <NeonButton
        title={saving ? "Enregistrement..." : "Enregistrer"}
        onPress={save}
        variant="red"
        disabled={saving}
      />
      {pred?.podium?.length ? (
        <NeonText glow={false} color="blue" style={{ marginTop:12, fontSize:12 }}>
          Podium choisi: {pred.podium.join(" > ")}
        </NeonText>
      ) : null}
    </ScrollView>
  );
};

export default PredictionsScreen;