import { FirestoreClient } from "@/infra";

export const manufactureDatabaseApi = (): FirestoreClient =>
  new FirestoreClient();
