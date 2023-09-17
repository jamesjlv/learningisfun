import { GetSentencesServiceNamespace } from "@/domain/services";

export interface SentencesContextData {
  sentences?: GetSentencesServiceNamespace.Model;
  isLoading: boolean;
  handleGetSentences: (data: HandleGetSentencesProps) => Promise<void>;
}

export interface SentencesProvider {
  children: React.ReactNode;
}

export interface HandleGetSentencesProps {
  origin?: string;
  translation?: string;
}
