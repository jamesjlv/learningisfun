/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  [key: string]: any;
};
