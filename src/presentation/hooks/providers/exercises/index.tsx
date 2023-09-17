import React, { createContext, useContext, useEffect, useState } from "react";
import { SentencesProvider, SentencesContextData } from "./props";

export const ExercisesContext = createContext<SentencesContextData>(
  {} as SentencesContextData,
);

export const ExercisesProvider = ({ children }: SentencesProvider) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSentences = async () => {
    try {
      setIsLoading(true);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetSentences();
  }, []);

  return (
    <ExercisesContext.Provider value={{ isLoading }}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercices = (): SentencesContextData =>
  useContext(ExercisesContext);
