import React from "react";

import { Routes } from "./routes/index.routes";
import { ApplicationContextProviderManagement } from "@/presentation/hooks";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Require cycle:"]);

  return (
    <ApplicationContextProviderManagement>
      <Routes />
    </ApplicationContextProviderManagement>
  );
}
