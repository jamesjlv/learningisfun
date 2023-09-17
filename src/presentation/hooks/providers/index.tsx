import React from "react";
import { AppThemeProvider } from "./theme";
import { NavigationProvider } from "./navigation";

interface ApplicationContextProviderManagementProps {
  children: React.ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<
  ApplicationContextProviderManagementProps
> = ({ children }) => {
  return (
    <NavigationProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </NavigationProvider>
  );
};
