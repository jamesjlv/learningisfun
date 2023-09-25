import React, { useEffect } from "react";

import { Container, FinishedText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/main";

export const Finished = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate(Routes.Welcome);
    }, 3000);
  }, []);

  return (
    <Container>
      <FinishedText>Congrats!{"\n"}You finished your exercises.</FinishedText>
    </Container>
  );
};
