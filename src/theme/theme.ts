import { DefaultTheme } from "styled-components/native";

export const appTheme: DefaultTheme = {
  colors: {
    background: "#000000",
    surface: "#1C1C1C",
    textPrimary: "#F4F4F4",
    neonRed: "#FF0028",
    neonBlue: "#00BFFF",
    danger: "#FF3355",
    success: "#12D87C",
    warning: "#FFC300",
    border: "#2A2A2A"
  },
  spacing: (f: number) => f * 8,
  radius: {
    sm: 6,
    md: 12,
    lg: 20
  },
  shadows: {
    neonRed: "0 0 8px #FF0028AA",
    neonBlue: "0 0 8px #00BFFFAA"
  }
};

export type AppTheme = typeof appTheme;
