import React, { useState } from "react";

import {
  SentenceToTranslate,
  SpaceForSelectedWord,
  SentenceTranslatedWrapper,
  SentenceIsolateWordAndTooltip,
  SentenceWordWrapper,
  TooltipWrapper,
  TooltipWord,
  WrapperWordAndTooltip,
  Tail,
} from "./styles";
import { WordComponent } from "../word";
import { SentenceLineComponentProps } from "./props";
import { LayoutChangeEvent } from "react-native";

export const SentenceLineComponent: React.FC<SentenceLineComponentProps> = ({
  sentence,
  selectedWord,
  onPress,
  wordsMatch,
  wordToReplace,
}) => {
  const [isPressing, setIsPressing] = useState({ isActive: false, word: "" });

  const wordTranslated = wordsMatch?.filter(
    (item) => item.origin === wordToReplace,
  )?.[0];
  const beforeWordSentence = sentence
    ?.split(wordTranslated?.translation!)?.[0]
    .split(" ");
  const afterWordSentence = sentence
    ?.split(wordTranslated?.translation!)?.[1]
    ?.split(" ");

  const handleMatchStrings = (str1: string, str2: string) => {
    return (
      str1.toLowerCase().replace(",", "") ===
      str2.toLowerCase().replace(",", "")
    );
  };

  return (
    <>
      <SentenceTranslatedWrapper>
        {beforeWordSentence
          ?.filter((item) => item !== "")
          ?.map((word, index) => {
            const toolTipWord = wordsMatch?.filter((item) =>
              handleMatchStrings(item.translation, word),
            )?.[0]?.origin;
            const active = isPressing.word === toolTipWord;
            return (
              <WrapperWordAndTooltip key={`BeforeWordSentence${word}${index}`}>
                <TooltipWrapper active={active}>
                  <TooltipWord active={active}>{toolTipWord}</TooltipWord>
                  <Tail active={active} />
                </TooltipWrapper>
                <SentenceIsolateWordAndTooltip
                  onPressIn={() => {
                    setIsPressing({ isActive: true, word: toolTipWord! });
                  }}
                  onPressOut={() =>
                    setIsPressing({ isActive: false, word: "" })
                  }
                >
                  <SentenceWordWrapper>
                    <SentenceToTranslate>{word}</SentenceToTranslate>
                  </SentenceWordWrapper>
                </SentenceIsolateWordAndTooltip>
              </WrapperWordAndTooltip>
            );
          })}
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
        {afterWordSentence
          ?.filter((item) => item !== "")
          ?.map((word, index) => {
            const toolTipWord = wordsMatch?.filter((item) =>
              handleMatchStrings(item.translation, word),
            )?.[0]?.origin;
            const active = isPressing.word === toolTipWord;

            return (
              <WrapperWordAndTooltip key={`AfterWordSentence${word}${index}`}>
                <TooltipWrapper active={active}>
                  <TooltipWord active={active}>{toolTipWord}</TooltipWord>
                  <Tail active={active} />
                </TooltipWrapper>
                <SentenceIsolateWordAndTooltip
                  onPressIn={() => {
                    setIsPressing({ isActive: true, word: toolTipWord! });
                  }}
                  onPressOut={() =>
                    setIsPressing({ isActive: false, word: "" })
                  }
                >
                  <SentenceWordWrapper>
                    <SentenceToTranslate>{word}</SentenceToTranslate>
                  </SentenceWordWrapper>
                </SentenceIsolateWordAndTooltip>
              </WrapperWordAndTooltip>
            );
          })}
      </SentenceTranslatedWrapper>
    </>
  );
};
