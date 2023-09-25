import { ISentencesModel } from "@/domain";

export interface WordListComponentProps {
  exercise: ISentencesModel;
  setSelectedWord: (value: React.SetStateAction<string | undefined>) => void;
  setCurrentStatus: React.Dispatch<
    React.SetStateAction<
      "waiting" | "disabled" | "contrast" | "active" | "error" | undefined
    >
  >;
  selectedWord?: string;
  type?: "disabled" | "primary" | "secondary";
}
