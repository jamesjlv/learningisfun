import "styled-components/native";
import { Colors, Size, Font, ModerateSize, Dimension } from "@/shared/styles";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: typeof Colors;
    sizes: typeof Size;
    text: typeof Font;
    moderateSize: typeof ModerateSize;
    dimension: typeof Dimension;
  }
}
