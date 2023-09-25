import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.green};
  flex-direction: column-reverse;
  padding: ${({ theme }) => theme.moderateSize.large};
`;

export const FinishedText = styled.Text`
  ${({ theme }) => css`
    ${theme.text.inter.bold}
    color: ${theme.colors.text.active};
    font-size: ${theme.moderateSize.xLarge};
    margin-bottom: ${({ theme }) => theme.moderateSize.largest};
  `}
`;
