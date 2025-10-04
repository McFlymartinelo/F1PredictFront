import React from "react";
import { Pressable, ActivityIndicator, ViewStyle } from "react-native";
import { NeonText } from "./NeonText";

interface Props {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  variant?: "red" | "blue";
  style?: ViewStyle;
  disabled?: boolean;
}

export const NeonButton: React.FC<Props> = ({
  title,
  onPress,
  loading,
  variant = "red",
  style,
  disabled
}) => {
  const bg = variant === "red" ? "#FF0028" : "#00BFFF";
  return (
    <Pressable
      disabled={loading || disabled}
      onPress={onPress}
      style={[
        {
          backgroundColor: bg,
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          shadowColor: bg,
          shadowOpacity: 0.8,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          opacity: disabled ? 0.5 : 1
        },
        style
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#000" />
      ) : (
        <NeonText color="white" glow={false}>
          {title}
        </NeonText>
      )}
    </Pressable>
  );
};
