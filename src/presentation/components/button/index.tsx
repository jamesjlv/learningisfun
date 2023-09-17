import React from "react";

import { Container, Title } from "./styles";
import { ButtonComponentProps } from "./props";
import { ActivityIndicator } from "react-native";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text = "ButtonTitle",
  styleType = "waiting",
  elements,
  onPress,
  disabled = false,
  loading = false,
}) => {
  return (
    <Container
      styleType={styleType}
      onPress={onPress}
      disabled={disabled}
      {...elements?.buttonContainer}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Title styleType={styleType} {...elements?.textProps}>
          {text}
        </Title>
      )}
    </Container>
  );
};
