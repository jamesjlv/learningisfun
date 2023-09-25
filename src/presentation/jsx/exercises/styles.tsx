import { ButtonComponent } from "@/presentation/components";
import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";
import { ButtonFeedbackContainerStyleProps } from "./props";

export const Wrapper = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  flex-direction: column-reverse;
`;

export const Container = styled.View`
  flex: 1;
  max-height: 80%;
  border-radius: ${scale(30)}px;
  background-color: ${({ theme }) => theme.colors.primary.blueDark};
  padding: ${({ theme }) => theme.moderateSize.large};
  align-items: center;
`;

export const HowToPlay = styled.Text`
  ${({ theme }) => theme.text.inter.light}
  margin-top: ${({ theme }) => theme.moderateSize.xmLarge};
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.moderateSize.regular};
`;

export const MainSentence = styled.Text`
  ${({ theme }) => theme.text.inter.medium}
  margin-top: ${({ theme }) => theme.moderateSize.xmLarge};
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.moderateSize.xMedium};
`;

export const FocusedWord = styled.Text`
  ${({ theme }) => theme.text.inter.bold}
  margin-top: ${({ theme }) => theme.moderateSize.xmLarge};
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.moderateSize.xMedium};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.primary.white};
`;

export const Hint = styled.View``;

export const HintText = styled.Text``;

export const Words = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.moderateSize.largest};
  padding: 0 ${({ theme }) => theme.moderateSize.xmLarge};
  justify-content: center;
`;

export const Continue = styled(ButtonComponent).attrs(({ theme }) => ({
  elements: {
    buttonContainer: {
      style: { width: "100%", marginTop: scale(theme.sizes.xMedium) },
    },
    textProps: {
      style: {
        fontSize: scale(theme.sizes.regular),
        fontFamily: "Inter-ExtraBold",
        fontWeight: "900",
      },
    },
  },
}))``;

export const ButtonFeedbackContainer = styled.View<ButtonFeedbackContainerStyleProps>`
  width: 100%;
  position: absolute;
  background-color: ${({ theme, styleType }) =>
    styleType === "waiting"
      ? "transparent"
      : styleType === "error"
      ? theme.colors.text.error
      : styleType === "active"
      ? "transparent"
      : theme.colors.button.active};
  border-radius: ${scale(32)}px;
  padding: ${({ theme }) => theme.moderateSize.large};
  height: ${scale(160)}px;
`;

export const FeedbackStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 ${({ theme }) => theme.moderateSize.medium};
`;

export const Status = styled.Text`
  ${({ theme }) => css`
    ${theme.text.inter.extraBold}
    color: ${theme.colors.primary.white};
    font-size: ${theme.moderateSize.medium};
  `}
`;
