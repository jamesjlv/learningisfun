import { GetRemoteSentencesService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories";

export const manufactureRemoteGetSentences = (): GetRemoteSentencesService =>
  new GetRemoteSentencesService(manufactureDatabaseApi());
