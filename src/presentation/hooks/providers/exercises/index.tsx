import React, { createContext, useContext, useState } from "react";
import {
  SentencesProvider,
  SentencesContextData,
  HandleGetSentencesProps,
} from "./props";
import { manufactureRemoteGetSentences } from "@/main/services/sentences";
import { GetSentencesServiceNamespace } from "@/domain";

export const ExercisesContext = createContext<SentencesContextData>(
  {} as SentencesContextData,
);

export const ExercisesProvider = ({ children }: SentencesProvider) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sentences, setSentences] =
    useState<GetSentencesServiceNamespace.Model>();

  const handleGetSentences = async ({
    origin = "english",
    translation = "german",
  }: HandleGetSentencesProps) => {
    try {
      const response = await manufactureRemoteGetSentences().exec({
        origin,
        translation,
      });
      setSentences(response);
      setIsLoading(true);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ExercisesContext.Provider
      value={{ isLoading, handleGetSentences, sentences }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercices = (): SentencesContextData =>
  useContext(ExercisesContext);
