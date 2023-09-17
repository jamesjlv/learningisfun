import React from "react";

import { Routes } from "./routes/index.routes";
import { ApplicationContextProviderManagement } from "@/presentation/hooks";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs([
    "Require cycle:",
    "Sending `onAnimatedValueUpdate` with no listeners registered.",
  ]);

  return (
    <ApplicationContextProviderManagement>
      <Routes />
    </ApplicationContextProviderManagement>
  );
}
