import React from "react";

import { WordListComponentProps } from "./props";
import { Words } from "./styles";
import { WordComponent } from "../word";

export const WordListComponent: React.FC<WordListComponentProps> = ({
  exercise,
  type,
  setSelectedWord,
  selectedWord,
  setCurrentStatus,
}) => {
  return (
    <Words>
      {exercise?.answerOptions?.map((item, index) => (
        <WordComponent
          key={item + index}
          onPress={() => {
            setSelectedWord(item);
            setCurrentStatus("active");
          }}
          word={item}
          selected={selectedWord === item}
          type={type}
        />
      ))}
    </Words>
  );
};
