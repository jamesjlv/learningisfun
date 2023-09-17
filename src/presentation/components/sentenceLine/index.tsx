import React from "react";

import {
  Container,
  SentenceToTranslate,
  SpaceForSelectedWord,
  SentenceTranslatedWrapper,
} from "./styles";
import { WordComponent } from "../word";
import { SentenceLineComponentProps } from "./props";

export const SentenceLineComponent: React.FC<SentenceLineComponentProps> = ({
  sentence,
  selectedWord,
  onPress,
  wordsMatch,
  wordToReplace,
}) => {
  const wordTranslated = wordsMatch?.filter(
    (item) => item.origin === wordToReplace,
  )?.[0];
  const beforeWordSentence = sentence?.split(wordTranslated?.translation!)?.[0];
  const afterWordSentence = sentence?.split(wordTranslated?.translation!)?.[1];

  return (
    <SentenceTranslatedWrapper>
      <SentenceToTranslate>{beforeWordSentence}</SentenceToTranslate>
      <SpaceForSelectedWord selected={!!selectedWord} onPress={onPress}>
        {selectedWord && (
          <WordComponent
            disabled
            word={selectedWord}
            selected={false}
            type="secondary"
          />
        )}
      </SpaceForSelectedWord>
      <SentenceToTranslate>{afterWordSentence}</SentenceToTranslate>
    </SentenceTranslatedWrapper>
  );
};
