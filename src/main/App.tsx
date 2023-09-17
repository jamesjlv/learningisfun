import React from "react";

import { Routes } from "./routes/index.routes";
import { ApplicationContextProviderManagement } from "@/presentation/hooks";

export default function App() {
  return (
    <ApplicationContextProviderManagement>
      <Routes />
    </ApplicationContextProviderManagement>
  );
}
