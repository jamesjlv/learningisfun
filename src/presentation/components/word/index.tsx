import React from "react";

import { WordButton, Word, WordTitle } from "./styles";
import { WordComponentProps } from "./props";

export const WordComponent: React.FC<WordComponentProps> = ({
  selected,
  word,
  type = "primary",
  styleType = "waiting",
  ...rest
}) => {
  console.log({ word, styleType });
  return (
    <WordButton
      selected={selected}
      type={type}
      disabled={type === "disabled"}
      styleType={styleType}
      {...rest}
    >
      <Word selected={selected} type={type} styleType={styleType}>
        <WordTitle selected={selected} type={type} styleType={styleType}>
          {word}
        </WordTitle>
      </Word>
    </WordButton>
  );
};
