import styled from "styled-components/native";
import { Dimension, scale } from "@/shared/styles";
import { AlertStyleProps } from "./props";

export const Container = styled.View<AlertStyleProps>`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  position: absolute;
  bottom: ${({ theme }) => theme.moderateSize.xmLarge};
  margin: 0 ${({ theme }) => theme.moderateSize.large};
  background-color: ${({ theme }) => theme.colors.primary.red};
  border-width: 0.3px;
  border-color: ${({ theme }) => theme.colors.primary.white};
  align-items: center;
  padding: ${({ theme }) => theme.moderateSize.small};
  border-radius: ${({ theme }) => theme.moderateSize.small};
  width: ${Dimension.screenWidth - scale(48)}px;
`;

export const ErrorMessage = styled.Text`
  margin-left: ${({ theme }) => theme.moderateSize.medium};
  color: ${({ theme }) => theme.colors.primary.white};
`;
