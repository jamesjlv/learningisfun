import React from "react";
import ErrorSVG from "@assets/icons/alert-circle.svg";
import { Container, ErrorMessage } from "./styles";
import { AlertProps } from "./props";

export const Alert: React.FC<AlertProps> = ({
  message = "Message default",
  type = "error",
}) => {
  return (
    <Container testID="AlertComponent" type={type}>
      <ErrorSVG color="#FFFFFF" />
      <ErrorMessage testID="AlertComponent-Text">{message}</ErrorMessage>
    </Container>
  );
};
