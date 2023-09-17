import styled, { css } from "styled-components/native";
import { scale } from "@/shared/styles";
import { ButtonComponentStyleProps } from "./props";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonComponentStyleProps>`
  height: ${scale(50)}px;
  background-color: ${({ theme, styleType }) => theme.colors.button[styleType]};
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.moderateSize.medium};
  border-radius: ${scale(25)}px;
`;

export const Title = styled.Text<ButtonComponentStyleProps>`
  ${({ theme, styleType }) => css`
    ${theme.text.inter.semiBold}
    font-size: ${theme.moderateSize.medium};
    color: ${theme.colors.text[styleType]};
  `}
`;
