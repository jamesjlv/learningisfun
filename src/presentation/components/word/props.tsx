import { TouchableOpacityProps } from "react-native";

export interface WordComponentProps extends TouchableOpacityProps {
  selected: boolean;
  word: string;
  type?: "primary" | "secondary" | "disabled";
}

export interface WordComponentStyleProps {
  type: "primary" | "secondary" | "disabled";
  selected: boolean;
}
