import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import FlagSvg from "@assets/icons/flag.svg";
import { useExercices } from "@/presentation/hooks";
import { ButtonComponentProps } from "@/presentation/components/button/props";
import {
  SentenceLineComponent,
  WordComponent,
} from "@/presentation/components";
import {
  ButtonFeedbackContainer,
  Container,
  Continue,
  FeedbackStatus,
  FocusedWord,
  HowToPlay,
  MainSentence,
  Status,
  Words,
  Wrapper,
} from "./styles";
import { ButtonTitle, ExercisesRoutesProps } from "./props";

export const ExercisesScreen = () => {
  const params = useRoute().params as ExercisesRoutesProps;
  const [isLoading, setIsLoading] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const { sentences, handleGetSentences } = useExercices();
  const [selectedWord, setSelectedWord] = useState<string>();
  const [currentStatus, setCurrentStatus] =
    useState<ButtonComponentProps["styleType"]>("waiting");

  const exercise = useMemo(() => {
    return sentences?.at(currentPosition);
  }, [currentPosition, sentences]);

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
        {exercise?.answerOptions?.map((item, index) => (
          <WordComponent
            key={item + index}
            onPress={() => {
              setSelectedWord(item);
              setCurrentStatus("active");
            }}
            word={item}
            selected={selectedWord === item}
            type={
              currentStatus === "contrast" || currentStatus === "error"
                ? "disabled"
                : "primary"
            }
          />
        ))}
      </Words>
    );
  };

  const renderSentenceTranslated = () => {
    return (
      <SentenceLineComponent
        sentence={exercise?.sentenceTranslated}
        wordsMatch={exercise?.wordsMatch}
        wordToReplace={exercise?.choosedWord}
        onPress={() => {
          setSelectedWord(undefined);
          setCurrentStatus("waiting");
        }}
        selectedWord={selectedWord}
      />
    );
  };

  const handleIfWordMatchs = () => {
    const wordTranslated = exercise?.wordsMatch?.filter(
      (item) => item.origin === exercise.choosedWord,
    )?.[0]?.translation;
    try {
      if (!selectedWord) {
        throw new Error("Word not selected");
      }
      if (currentStatus === "active") {
        if (selectedWord === wordTranslated) {
          setCurrentStatus("contrast");
        } else {
          setCurrentStatus("error");
        }
      } else {
        setCurrentPosition((prevState) => {
          if (sentences?.length && sentences.length <= prevState + 1) {
            return 0;
          } else {
            return prevState + 1;
          }
        });
        setSelectedWord(undefined);
        setCurrentStatus("waiting");
      }
    } catch (error) {
      console.error(error);
    }
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
                ? `Answer: ${exercise?.wordsMatch?.filter(
                    (item) => item.origin === exercise.choosedWord,
                  )?.[0]?.translation}`
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
