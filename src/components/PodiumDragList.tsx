import React, { useCallback } from "react";
import DraggableFlatList, {
  RenderItemParams
} from "react-native-draggable-flatlist";
import { View, Text, StyleSheet } from "react-native";
import { NeonText } from "./NeonText";

interface DriverItem {
  id: string;
  code: string;
  name: string;
  team?: string;
}

interface Props {
  data: DriverItem[];
  onChange: (order: string[]) => void;
}

export const PodiumDragList: React.FC<Props> = ({ data, onChange }) => {
  const renderItem = useCallback(
    ({ drag, isActive, item, index }: RenderItemParams<DriverItem>) => {
      const colors = ["#FFD700", "#C0C0C0", "#CD7F32"];
      return (
        <View
          style={[
            styles.item,
            { backgroundColor: isActive ? "#111" : "#1C1C1C" }
          ]}
          onLongPress={drag}
        >
          <NeonText color="blue" style={{ width: 28 }} glow={false}>
            {index + 1}.
          </NeonText>
          <Text style={[styles.name, { color: "#F4F4F4" }]}>{item.name}</Text>
          <View style={[styles.medal, { backgroundColor: colors[index] || "#333" }]} />
        </View>
      );
    },
    []
  );

  return (
    <DraggableFlatList
      activationDistance={12}
      data={data}
      keyExtractor={(item) => item.id}
      onDragEnd={({ data: newData }) => onChange(newData.map(d => d.id))}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 10,
    marginBottom: 8
  },
  name: {
    flex: 1,
    fontSize: 16
  },
  medal: {
    width: 16,
    height: 16,
    borderRadius: 8
  }
});
