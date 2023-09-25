import React from "react";
import { AppThemeProvider } from "./theme";
import { NavigationProvider } from "./navigation";
import { ExercisesProvider } from "./exercises";
import { AlertProvider } from "../methods/alert";
import { GlobalComponents } from "@/presentation/components/global-components";

interface ApplicationContextProviderManagementProps {
  children: React.ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<
  ApplicationContextProviderManagementProps
> = ({ children }) => {
  return (
    <NavigationProvider>
      <AlertProvider>
        <ExercisesProvider>
          <AppThemeProvider>
            <>
              {children}
              <GlobalComponents />
            </>
          </AppThemeProvider>
        </ExercisesProvider>
      </AlertProvider>
    </NavigationProvider>
  );
};
