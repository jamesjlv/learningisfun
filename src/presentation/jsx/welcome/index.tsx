import React from "react";

import { Button, Wrapper, Title, ButtonWrapper, Container } from "./styles";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/main";

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();

  const handleNavigate = (language: string, translation: string) => {
    try {
      navigate(Routes.Exercises, { origin: language, translation });
    } catch (error) {
      console.error("Can not navigate");
    }
  };

  return (
    <Wrapper source={require("@/assets/images/Welcome.jpg")}>
      <StatusBar hidden backgroundColor="transparent" translucent />
      <Container>
        <Title>The most fun way to learn a language.</Title>
        <ButtonWrapper>
          <Button
            text="Learn German"
            onPress={() => handleNavigate("english", "german")}
            disabled={false}
            loading={false}
          />
          <Button
            text="Learn English"
            onPress={() => handleNavigate("german", "english")}
            disabled={false}
            loading={false}
          />
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};
