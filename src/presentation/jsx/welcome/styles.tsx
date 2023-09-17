import styled, { css } from "styled-components/native";
import { ButtonComponent } from "@/presentation/components";

export const Container = styled.View``;

export const Wrapper = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  flex-direction: column-reverse;
  padding: ${({ theme }) => theme.moderateSize.large};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    ${theme.text.inter.bold}
    font-size: ${theme.moderateSize.xmLarge};
    color: ${theme.colors.primary.white};
  `}
`;

export const ButtonWrapper = styled.View`
  margin-top: ${({ theme }) => theme.moderateSize.xmLarge};
`;

export const Button = styled(ButtonComponent)``;
