import React, { useEffect, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { NeonText } from "@components/NeonText";
import { ApiService } from "@services/api";
import { NeonButton } from "@components/NeonButton";

interface NewsItem {
  id: string;
  title: string;
  image?: string;
  summary: string;
  link?: string;
}

const HomeScreen: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await ApiService.getNews();
      setNews(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }} refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}> 
      <View style={{ padding: 16 }}>
        <NeonText color="red" style={{ fontSize: 24, marginBottom: 12 }}>Dernières News</NeonText>
        {news.slice(0,5).map(n => (
          <View key={n.id} style={{ backgroundColor: "#1C1C1C", padding: 12, borderRadius: 12, marginBottom: 12 }}>
            <NeonText color="blue" style={{ fontSize: 16 }}>{n.title}</NeonText>
            <NeonText glow={false} color="white" style={{ fontSize: 12, marginTop: 4 }}>{n.summary}</NeonText>
            <NeonButton title="Lire +" style={{ marginTop: 8 }} onPress={() => {}} variant="blue" />
          </View>
        ))}

        <View style={{ marginTop: 24 }}>
          <NeonText color="red" style={{ fontSize: 20, marginBottom: 8 }}>Sondage rapide</NeonText>
          <NeonButton title="Qui sera en pole ?" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;