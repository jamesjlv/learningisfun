import firestore, {
  Filter,
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

import { DatabaseResponse } from "@/data";
import { DatabaseClient, DatabaseRequest } from "@/data";

export class FirestoreClient implements DatabaseClient<any> {
  async request(params: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>;
    let statusCode = 500;
    try {
      function handleFilter(): typeof Filter {
        switch (params?.filterBehavior) {
          case "and":
            const filters = params?.filters?.map((filter) =>
              firestore.Filter(
                filter.leftCondition,
                filter.condition,
                filter.rightCondition,
              ),
            );
            //@ts-ignore
            return firestore.Filter.and(...filters);
          case "unique":
            const FilterUnique = params?.filters?.[0];
            return firestore.Filter(
              //@ts-ignore
              FilterUnique?.leftCondition,
              FilterUnique?.condition,
              FilterUnique?.rightCondition,
            );
          case "or":
            return firestore.Filter.or(
              ...params?.filters?.map((filter) =>
                firestore.Filter(
                  filter.leftCondition,
                  filter.condition,
                  filter.rightCondition,
                ),
              ),
            );
          default:
            return firestore.Filter.and(
              ...params?.filters?.map((filter) =>
                firestore.Filter(
                  filter.leftCondition,
                  filter.condition,
                  filter.rightCondition,
                ),
              ),
            );
        }
      }

      databaseResponse = await firestore()
        .collection(params.collection)
        .where(handleFilter())
        .get();

      statusCode = 200;
    } catch (error) {
      databaseResponse = error.response;
    }

    return {
      statusCode,
      body: {
        ...databaseResponse?.docs?.[0]?.data(),
        documentId: databaseResponse?.docs?.[0]?.ref?.id,
      },
    };
  }

  async create({
    collection,
    body,
  }: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>;
    let statusCode: number;
    try {
      databaseResponse = await firestore().collection(collection).add(body);
      statusCode = 200;
    } catch (error) {
      databaseResponse = error.response;
      statusCode = 500;
    }

    return {
      statusCode,
      body: {
        documentId: databaseResponse?.id,
      },
    };
  }

  async delete({
    collection,
    body,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: any;

    try {
      databaseResponse = await firestore()
        .collection(collection)
        .doc(documentId)
        .delete();
      databaseResponse["status"] = 200;
    } catch (error) {
      databaseResponse = error.response;
      databaseResponse["status"] = 500;
    }
    return {
      statusCode: databaseResponse.status,
      body: databaseResponse,
    };
  }

  async update({
    collection,
    body,
    documentId,
  }: DatabaseRequest): Promise<DatabaseResponse<any>> {
    let databaseResponse: any;
    let statusCode = 200;
    try {
      databaseResponse = await firestore()
        .collection(collection)
        .doc(documentId)
        .update(body);
      statusCode = 200;
    } catch (error) {
      databaseResponse = error.response;
      statusCode = 500;
    }
    return {
      statusCode,
      body: databaseResponse,
    };
  }
}
