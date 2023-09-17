export interface ExercisesRoutesProps {
  origin: string;
  translation: string;
}

export interface ButtonFeedbackContainerStyleProps {
  styleType?: "waiting" | "disabled" | "contrast" | "active" | "error";
}

export enum ButtonTitle {
  waiting = "CONTINUE",
  active = "CHECK ANSWER",
  error = "CONTINUE",
  contrast = "CONTINUE",
  disabled = "CONTINUE",
}
