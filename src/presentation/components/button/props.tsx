import { TextProps, ViewProps } from "react-native";

export interface ButtonComponentProps {
  text: string;
  styleType?: "waiting" | "disabled" | "contrast" | "active" | "error";
  onPress: () => void;
  disabled: boolean;
  loading: boolean;
  elements?: {
    textProps?: TextProps;
    buttonContainer?: ViewProps;
  };
}
export interface ButtonComponentStyleProps {
  styleType: "waiting" | "disabled" | "contrast" | "active" | "error";
}
