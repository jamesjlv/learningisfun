import React from "react";
import { Alert } from "../alert";
import { useAlert } from "@/presentation/hooks/methods/alert";

export const GlobalComponents: React.FC = () => {
  const { alertData } = useAlert();

  return (
    <>
      {alertData?.message && (
        <Alert message={alertData?.message} type={alertData?.type} />
      )}
    </>
  );
};
