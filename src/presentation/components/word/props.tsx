import { TouchableOpacityProps } from "react-native";

export interface WordComponentProps extends TouchableOpacityProps {
  selected: boolean;
  word: string;
  type?: "primary" | "secondary" | "disabled";
  styleType?: "waiting" | "disabled" | "contrast" | "active" | "error";
}

export interface WordComponentStyleProps {
  type: "primary" | "secondary" | "disabled";
  selected: boolean;
  styleType: "waiting" | "disabled" | "contrast" | "active" | "error";
}
