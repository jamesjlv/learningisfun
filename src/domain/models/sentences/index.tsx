export type ISentencesModel = {
  answerOptions: string[];
  origin: string;
  choosedWord: string;
  random: boolean;
  randomQtd?: number;
  sentenceBase: string;
  sentenceTranslated: string;
  translation: string;
  wordsMatch: {
    origin: string;
    translation: string;
  }[];
};
