import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";
import { WordComponentStyleProps } from "./props";

export const Word = styled.View.attrs({
  shadowColor: "rgb(0, 0, 0)",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.53,
  shadowRadius: 5.97,
  elevation: 21,
})<WordComponentStyleProps>`
  ${({ theme, selected }) => css`
    height: ${scale(43)}px;
    background-color: ${selected
      ? theme.colors.button.disabled
      : theme.colors.primary.white};
    align-items: center;
    justify-content: center;
    padding: ${theme.moderateSize.regular} ${theme.moderateSize.medium};
    margin-right: ${theme.moderateSize.medium};
    border-radius: ${theme.moderateSize.medium};
  `}

  ${({ type }) =>
    type === "secondary" &&
    css`
      margin-right: 0;
    `}

  ${({ theme, type }) =>
    type === "disabled" &&
    css`
      background-color: ${theme.colors.button.disabled};
    `}
`;

export const WordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<WordComponentStyleProps>`
  height: ${scale(43)}px;
  margin-bottom: ${({ theme }) => theme.moderateSize.medium};

  ${({ type }) =>
    type === "secondary" &&
    css`
      margin-bottom: 0;
    `}
`;

export const WordTitle = styled.Text<WordComponentStyleProps>`
  ${({ theme, selected }) => css`
    ${theme.text.inter.semiBold}
    color: ${selected ? "transparent" : theme.colors.primary.blueDark};
    font-size: ${theme.moderateSize.xRegular};
  `}

  ${({ theme, type }) =>
    type === "disabled" &&
    css`
      color: ${theme.colors.text.disabled};
    `}
`;
