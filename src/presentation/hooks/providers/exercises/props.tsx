import { GetSentencesServiceNamespace } from "@/domain/services";

export interface SentencesContextData {
  sentences?: GetSentencesServiceNamespace.Model;
  isLoading: boolean;
}

export interface SentencesProvider {
  children: React.ReactNode;
}
