import {
  DatabaseClient,
  DatabaseFilterCondition,
  DatabaseReturnStatusCode,
} from "@/data/database/firestore";
import { GetSentencesServiceNamespace } from "@/domain";

export class GetRemoteSentencesService
  implements GetSentencesServiceNamespace.Interface
{
  constructor(
    private readonly databaseClient: DatabaseClient<GetSentencesServiceNamespace.Model>,
  ) {}

  async exec(
    data: GetSentencesServiceNamespace.Params,
  ): Promise<GetSentencesServiceNamespace.Model> {
    const { origin, translation } = data;

    let response = await this.databaseClient.request({
      collection: "sentences",
      filterBehavior: "and",
      filters: [
        {
          leftCondition: "origin",
          condition: DatabaseFilterCondition.Equal,
          rightCondition: origin,
        },
        {
          leftCondition: "translation",
          condition: DatabaseFilterCondition.Equal,
          rightCondition: translation,
        },
      ],
    });

    switch (response.statusCode) {
      case DatabaseReturnStatusCode.success:
        return response.body as GetSentencesServiceNamespace.Model;
      case DatabaseReturnStatusCode.forbidden:
        throw new Error("Problem to get sentences, please try again later.");
      default:
        throw new Error("Unknown error, please try again later.");
    }
  }
}
