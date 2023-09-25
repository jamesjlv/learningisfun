export type ContextData = {
  alertData: GlobalAlert;
  alert(alertData: GlobalAlert): void;
  dismiss(): void;
};

export type GlobalAlert = {
  type?: "error" | "success" | "warning" | "caution";
  message?: string;
};

export type ContextAlertProps = {
  children: React.ReactNode;
};
