import styled from "styled-components/native";

export const Words = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.moderateSize.largest};
  padding: 0 ${({ theme }) => theme.moderateSize.xmLarge};
  justify-content: center;
`;
