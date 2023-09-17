import React, { useEffect, useState } from "react";

import {
  Container,
  Continue,
  FocusedWord,
  HowToPlay,
  MainSentence,
  SentenceToTranslate,
  SentenceTranslatedWrapper,
  SpaceForSelectedWord,
  Word,
  WordButton,
  WordTitle,
  Words,
  Wrapper,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { ExercisesRoutesProps } from "./props";
import { useExercices } from "@/presentation/hooks";
import { ActivityIndicator } from "react-native";

export const ExercisesScreen = () => {
  const params = useRoute().params as ExercisesRoutesProps;
  const [isLoading, setIsLoading] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const { sentences, handleGetSentences } = useExercices();
  const exercise = sentences?.at(currentPosition);
  const [selectedWord, setSelectedWord] = useState<string>();

  const handleFetchSentences = async () => {
    try {
      await handleGetSentences({
        origin: params.origin,
        translation: params.translation,
      });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMainSentence = () => {
    const sentenceSplited = exercise?.sentenceBase?.split(exercise.choosedWord);

    return (
      <MainSentence>
        {sentenceSplited?.[0]}
        <FocusedWord>{exercise?.choosedWord}</FocusedWord>
        {sentenceSplited?.[1]}
      </MainSentence>
    );
  };

  const renderWords = () => {
    return (
      <Words>
        {exercise?.answerOptions?.map((item) => (
          <WordButton key={item} onPress={() => setSelectedWord(item)}>
            <Word selected={selectedWord === item}>
              <WordTitle selected={selectedWord === item}>{item}</WordTitle>
            </Word>
          </WordButton>
        ))}
      </Words>
    );
  };

  const renderSentenceTranslated = () => {
    const wordTranslated = exercise?.wordsMatch.filter(
      (item) => item.origin === exercise.choosedWord,
    )?.[0]?.translation;

    const sentenceSplited = exercise?.sentenceTranslated?.split(
      wordTranslated!,
    )!;

    return (
      <SentenceTranslatedWrapper>
        <SentenceToTranslate>{sentenceSplited[0]}</SentenceToTranslate>
        <SpaceForSelectedWord
          selected={!!selectedWord}
          onPress={() => setSelectedWord(undefined)}
        >
          {selectedWord && (
            <Word style={{ marginRight: 0 }}>
              <WordTitle>{selectedWord}</WordTitle>
            </Word>
          )}
        </SpaceForSelectedWord>
        <SentenceToTranslate>{sentenceSplited[1]}</SentenceToTranslate>
      </SentenceTranslatedWrapper>
    );
  };

  useEffect(() => {
    handleFetchSentences();
  }, []);

  return (
    <Wrapper source={require("@/assets/images/Exercises.jpg")}>
      <Container>
        <HowToPlay>Fill in the missing word</HowToPlay>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            {renderMainSentence()}
            {renderSentenceTranslated()}
            {renderWords()}
            <Continue
              text="CONTINUE"
              onPress={() => {}}
              disabled={false}
              loading={false}
            />
          </>
        )}
      </Container>
    </Wrapper>
  );
};
