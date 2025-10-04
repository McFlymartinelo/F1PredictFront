import React from "react";
import { View } from "react-native";
import { useAuthStore } from "@state/useAuthStore";
import { NeonText } from "@components/NeonText";
import { NeonButton } from "@components/NeonButton";

const ProfileScreen: React.FC = () => {
  const { firebaseUser, logout } = useAuthStore();

  return (
    <View style={{ flex:1, backgroundColor:"#000", padding:16 }}>
      <NeonText color="red" style={{ fontSize:24 }}>Profil</NeonText>
      <NeonText glow={false} style={{ marginTop:12 }}>
        {firebaseUser?.email || "Invité"}
      </NeonText>
      <NeonButton title="Déconnexion" style={{ marginTop:24 }} onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;