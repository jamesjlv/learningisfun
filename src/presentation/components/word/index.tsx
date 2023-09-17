import React from "react";

import { WordButton, Word, WordTitle } from "./styles";
import { WordComponentProps } from "./props";

export const WordComponent: React.FC<WordComponentProps> = ({
  selected,
  word,
  type = "primary",
  ...rest
}) => {
  return (
    <WordButton
      selected={selected}
      type={type}
      disabled={type === "disabled"}
      {...rest}
    >
      <Word selected={selected} type={type}>
        <WordTitle selected={selected} type={type}>
          {word}
        </WordTitle>
      </Word>
    </WordButton>
  );
};
