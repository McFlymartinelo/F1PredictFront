import React from "react";
import { Text, TextProps } from "react-native";
import { styled } from "nativewind";

const Base = styled(Text);

interface Props extends TextProps {
  color?: "red" | "blue" | "white";
  glow?: boolean;
  weight?: "regular" | "bold";
}

export const NeonText: React.FC<Props> = ({
  children,
  color = "white",
  glow = true,
  style,
  weight = "bold",
  ...rest
}) => {
  const colorMap = {
    red: "#FF0028",
    blue: "#00BFFF",
    white: "#F4F4F4"
  };
  return (
    <Base
      {...rest}
      style={[
        {
          color: colorMap[color],
          fontFamily: weight === "bold" ? "Orbitron_700Bold" : "Inter_400Regular",
          textShadowColor: glow ? colorMap[color] + "AA" : "transparent",
          textShadowRadius: glow ? 8 : 0
        },
        style
      ]}
    >
      {children}
    </Base>
  );
};
