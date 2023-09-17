import React from "react";
import { AppThemeProvider } from "./theme";
import { NavigationProvider } from "./navigation";
import { ExercisesProvider } from "./exercises";

interface ApplicationContextProviderManagementProps {
  children: React.ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<
  ApplicationContextProviderManagementProps
> = ({ children }) => {
  return (
    <NavigationProvider>
      <ExercisesProvider>
        <AppThemeProvider>{children}</AppThemeProvider>
      </ExercisesProvider>
    </NavigationProvider>
  );
};
