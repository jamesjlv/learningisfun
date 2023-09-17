import { ButtonComponent } from "@/presentation/components";
import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";

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

export const SentenceTranslatedWrapper = styled.View`
  flex-direction: row;
`;

export const Hint = styled.View``;

export const HintText = styled.Text``;

export const SentenceToTranslate = styled.Text`
  ${({ theme }) => theme.text.inter.medium}
  margin-top: ${({ theme }) => theme.moderateSize.xmLarge};
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.moderateSize.xMedium};
`;

export const SpaceForSelectedWord = styled.TouchableOpacity<{
  selected: boolean;
}>`
  border-bottom-color: ${({ theme }) => theme.colors.primary.white};
  width: ${({ theme, selected }) =>
    selected ? undefined : theme.moderateSize.xmLarge};
  border-bottom-width: ${({ selected }) => (selected ? 0 : 1)}px;
  margin: 0 ${({ theme }) => theme.moderateSize.small};
  justify-content: flex-end;
  margin-bottom: -${({ selected }) => (selected ? scale(8) : 0)}px;
`;

export const Words = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.moderateSize.largest};
  padding: 0 ${({ theme }) => theme.moderateSize.xmLarge};
  justify-content: center;
`;

export const Word = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.53,
  shadowRadius: 5.97,
  elevation: 21,
})<{ selected: boolean }>`
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
`;

export const WordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: ${scale(43)}px;
  margin-bottom: ${({ theme }) => theme.moderateSize.medium};
`;

export const WordTitle = styled.Text<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    ${theme.text.inter.semiBold}
    color: ${selected ? "transparent" : theme.colors.primary.blueDark};
    font-size: ${theme.moderateSize.xRegular};
  `}
`;

export const Continue = styled(ButtonComponent).attrs(({ theme }) => ({
  elements: {
    buttonContainer: { style: { width: "100%" } },
    textProps: {
      style: {
        fontSize: scale(theme.sizes.regular),
        fontFamily: "Inter-ExtraBold",
        fontWeight: "900",
      },
    },
  },
}))``;
