import React, { createContext, useCallback, useContext, useState } from "react";

import { GlobalAlert, ContextData, ContextAlertProps } from "./props";

const AlertContext = createContext<ContextData>({} as ContextData);

const AlertProvider: React.FC<ContextAlertProps> = ({
  children,
}: ContextAlertProps) => {
  const [alertData, setAlertData] = useState<GlobalAlert>({} as GlobalAlert);

  const alert = useCallback((data: GlobalAlert) => {
    setAlertData(data);
    setTimeout(() => {
      setAlertData({});
    }, 5000);
  }, []);

  const dismiss = useCallback(() => setAlertData({}), []);

  return (
    <AlertContext.Provider
      value={{
        alertData,
        alert,
        dismiss,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

function useAlert(): ContextData {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider.");
  }

  return context;
}

export { AlertProvider, useAlert };
