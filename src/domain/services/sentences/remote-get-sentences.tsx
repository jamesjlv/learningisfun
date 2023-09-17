import { ISentencesModel } from "@/domain/models";

interface IGetSentencesService {
  exec: (
    params: GetSentencesServiceNamespace.Params,
  ) => Promise<GetSentencesServiceNamespace.Model>;
}

export namespace GetSentencesServiceNamespace {
  export type Params = { origin: string; translation: string };

  export type Model = ISentencesModel[];

  export type Interface = IGetSentencesService;
}
