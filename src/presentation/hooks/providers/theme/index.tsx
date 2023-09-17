import React from "react";
import { ThemeProvider } from "styled-components/native";
import { ThemeProviderProps } from "./props";
import { Theme } from "@/shared/styles/theme";

export const AppThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
