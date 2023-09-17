import React, { useEffect, useState } from "react";

import {
  ButtonFeedbackContainer,
  Container,
  Continue,
  FeedbackStatus,
  FocusedWord,
  HowToPlay,
  MainSentence,
  SentenceToTranslate,
  SentenceTranslatedWrapper,
  SpaceForSelectedWord,
  Status,
  Word,
  WordButton,
  WordTitle,
  Words,
  Wrapper,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { ButtonTitle, ExercisesRoutesProps } from "./props";
import { useExercices } from "@/presentation/hooks";
import { ActivityIndicator } from "react-native";
import FlagSvg from "@assets/icons/flag.svg";
import { ButtonComponentProps } from "@/presentation/components/button/props";
export const ExercisesScreen = () => {
  const params = useRoute().params as ExercisesRoutesProps;
  const [isLoading, setIsLoading] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const { sentences, handleGetSentences } = useExercices();
  const exercise = sentences?.at(currentPosition);
  const [selectedWord, setSelectedWord] = useState<string>();
  const [currentStatus, setCurrentStatus] =
    useState<ButtonComponentProps["styleType"]>("waiting");

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
          <WordButton
            key={item}
            onPress={() => {
              setSelectedWord(item);
              setCurrentStatus("active");
            }}
          >
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
        <SentenceToTranslate>{sentenceSplited?.[0]}</SentenceToTranslate>
        <SpaceForSelectedWord
          selected={!!selectedWord}
          onPress={() => {
            setSelectedWord(undefined);
            setCurrentStatus("waiting");
          }}
        >
          {selectedWord && (
            <Word style={{ marginRight: 0 }} selected={false}>
              <WordTitle selected={false}>{selectedWord}</WordTitle>
            </Word>
          )}
        </SpaceForSelectedWord>
        <SentenceToTranslate>{sentenceSplited?.[1]}</SentenceToTranslate>
      </SentenceTranslatedWrapper>
    );
  };

  const handleIfWordMatchs = () => {
    const wordTranslated = exercise?.wordsMatch?.filter(
      (item) => item.origin === exercise.choosedWord,
    )?.[0]?.translation;
    try {
      if (!selectedWord) {
        return;
      }
      if (currentStatus === "active") {
        if (selectedWord === wordTranslated) {
          setCurrentStatus("contrast");
        } else {
          setCurrentStatus("error");
        }
      } else {
        if (sentences?.length >= currentPosition) {
          setSelectedWord(undefined);
          setCurrentStatus("waiting");
          return;
        }
        setCurrentPosition((prevState) => prevState + 1);
        setSelectedWord(undefined);
        setCurrentStatus("waiting");
      }
    } catch (error) {}
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
          </>
        )}
      </Container>
      <ButtonFeedbackContainer styleType={currentStatus}>
        {currentStatus !== "waiting" && currentStatus !== "active" ? (
          <FeedbackStatus>
            <Status>
              {currentStatus === "error"
                ? `Answer: ${exercise?.choosedWord}`
                : "Great Job!"}
            </Status>
            <FlagSvg />
          </FeedbackStatus>
        ) : null}

        <Continue
          text={ButtonTitle[currentStatus || "waiting"]}
          onPress={handleIfWordMatchs}
          disabled={false}
          loading={false}
          styleType={currentStatus}
        />
      </ButtonFeedbackContainer>
    </Wrapper>
  );
};
