import "styled-components";
import { appTheme } from "./theme";

declare module "styled-components" {
  type Theme = typeof appTheme;
  export interface DefaultTheme extends Theme {}
}