import { ViewProps } from "react-native";

export interface SentenceLineComponentProps extends ViewProps {
  sentence?: string;
  wordToReplace?: string;
  wordsMatch?: { origin: string; translation: string }[];
  onPress: () => void;
  selectedWord?: string;
}
