import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";
import TailSVG from "@assets/icons/tail.svg";
export const SentenceIsolateWordAndTooltip = styled.TouchableOpacity`
  overflow: hidden;
`;

export const SentenceTranslatedWrapper = styled.View`
  flex-direction: row;
`;

export const WrapperWordAndTooltip = styled.View`
  align-items: center;
  /* margin-right: ${({ theme }) => theme.moderateSize.smallest}; */
  margin-top: ${({ theme }) => theme.moderateSize.small};
`;

export const SentenceWordWrapper = styled.View.attrs({
  style: {
    borderStyle: "dotted",
    borderRadius: 1,
    borderWidth: 1,
  },
})`
  border-style: dotted;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary.blue};
  margin: -${scale(2)}px;
  margin-bottom: 0;
  align-items: center;
`;

export const TooltipWrapper = styled.View<{ active: boolean }>`
  ${({ theme }) => css`
    max-height: ${({ theme }) => theme.moderateSize.xxLarge};
    border-radius: ${theme.moderateSize.regular};
    margin-bottom: ${({ theme }) => theme.moderateSize.medium};
    align-items: center;
    background-color: ${theme.colors.primary.white};
  `}
`;

export const TooltipWord = styled.Text<{ active: boolean }>`
  ${({ theme }) => css`
    padding: ${theme.moderateSize.small} ${theme.moderateSize.regular};
    ${theme.text.inter.medium}
    color: ${theme.colors.primary.blue};
    font-size: ${theme.moderateSize.xRegular};
  `}

  ${({ active, theme }) =>
    !active &&
    css`
      background-color: ${theme.colors.primary.blueDark};
      color: ${theme.colors.primary.blueDark};
    `}
`;

export const Tail = styled(TailSVG).attrs<{ active: boolean }>(
  ({ theme, active }) => ({
    fill: active ? theme.colors.primary.white : theme.colors.primary.blueDark,
  }),
)<{ active: boolean }>`
  position: absolute;
  bottom: -10px;
`;

export const SentenceToTranslate = styled.Text`
  ${({ theme }) => css`
    ${theme.text.inter.medium}
    color: ${theme.colors.primary.white};
    font-size: ${theme.moderateSize.xMedium};
    line-height: ${theme.moderateSize.large};
  `}
`;

export const SpaceForSelectedWord = styled.TouchableOpacity<{
  selected: boolean;
}>`
  ${({ theme, selected }) => css`
    border-bottom-color: ${theme.colors.primary.white};
    width: ${theme.moderateSize.xmLarge};
    border-bottom-width: ${selected ? 0 : 1}px;
    justify-content: flex-end;
  `}

  ${({ selected }) =>
    selected &&
    css`
      margin-bottom: -${scale(8)}px;
      width: auto;
    `}
`;
