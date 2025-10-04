import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { NeonText } from "@components/NeonText";
import { ApiService } from "@services/api";
import { LeaderboardEntry } from "@types/index";

const LeaderboardScreen: React.FC = () => {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await ApiService.getLeaderboard();
      setData(res);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <View style={{ flex:1, backgroundColor:"#000", padding:16 }}>
      <NeonText color="red" style={{ fontSize:24, marginBottom:12 }}>Classement Global</NeonText>
      <FlatList
        data={data}
        refreshing={loading}
        onRefresh={load}
        keyExtractor={item => item.userId}
        renderItem={({ item }) => (
          <View style={{
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"#1C1C1C",
            padding:12,
            borderRadius:12,
            marginBottom:10
          }}>
            <NeonText color="blue" glow={false} style={{ width:32 }}>{item.rank}</NeonText>
            <NeonText glow={false} style={{ flex:1 }}>{item.displayName}</NeonText>
            <NeonText color="red" glow={false}>{item.points}</NeonText>
          </View>
        )}
      />
    </View>
  );
};

export default LeaderboardScreen;