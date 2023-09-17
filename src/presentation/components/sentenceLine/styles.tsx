import { scale } from "@/shared/styles";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const SentenceTranslatedWrapper = styled.View`
  flex-direction: row;
`;
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
  width: ${({ theme }) => theme.moderateSize.xmLarge};
  border-bottom-width: ${({ selected }) => (selected ? 0 : 1)}px;
  margin: 0 ${({ theme }) => theme.moderateSize.small};
  justify-content: flex-end;
  ${({ selected }) =>
    selected &&
    css`
      margin-bottom: -${scale(8)}px;
      width: auto;
    `}
`;
