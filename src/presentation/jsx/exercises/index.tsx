import React from "react";

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

export const ExercisesScreen = () => {
  const params = useRoute().params as ExercisesRoutesProps;

  return (
    <Wrapper source={require("@/assets/images/Exercises.jpg")}>
      <Container>
        <HowToPlay>Fill in the missing word</HowToPlay>
        <MainSentence>
          The <FocusedWord>House</FocusedWord> is small.
        </MainSentence>

        <SentenceTranslatedWrapper>
          <SentenceToTranslate>Das</SentenceToTranslate>
          <SpaceForSelectedWord />
          <SentenceToTranslate> ist klein.</SentenceToTranslate>
        </SentenceTranslatedWrapper>
        <Words>
          <WordButton>
            <Word>
              <WordTitle>folgen</WordTitle>
            </Word>
          </WordButton>
          <WordButton>
            <Word>
              <WordTitle>Schaf</WordTitle>
            </Word>
          </WordButton>
          <WordButton>
            <Word>
              <WordTitle>Bereiden</WordTitle>
            </Word>
          </WordButton>
          <WordButton>
            <Word>
              <WordTitle>Hause</WordTitle>
            </Word>
          </WordButton>
        </Words>
        <Continue
          text="CONTINUE"
          onPress={() => {}}
          disabled={false}
          loading={false}
        />
      </Container>
    </Wrapper>
  );
};
