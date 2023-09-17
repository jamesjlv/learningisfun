export type DatabaseRequest = {
  collection: string;
  body?: any;
  filters?: {
    condition: DatabaseFilterConditions;
    leftCondition: string | number | symbol;
    rightCondition: string | string[] | number;
  }[];
  filterBehavior?: "and" | "unique" | "or";
  documentId?: string;
};

export enum DatabaseFilterCondition {
  GratherThan = " >=",
  Equal = "==",
  LessThan = "<=",
}

export type DatabaseFilterConditions =
  | "<"
  | "<="
  | "=="
  | ">"
  | ">="
  | "!="
  | "array-contains"
  | "array-contains-any"
  | "in"
  | "not-in";

export enum DatabaseReturnStatusCode {
  success = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface DatabaseClient<R = any> {
  request: ({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest) => Promise<DatabaseResponse<R>>;
  update: ({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest) => Promise<DatabaseResponse<R>>;
  delete: ({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest) => Promise<DatabaseResponse<R>>;
  create: ({
    collection,
    body,
    filters,
    documentId,
  }: DatabaseRequest) => Promise<DatabaseResponse<R>>;
}

export interface DatabaseEncode<R = any> {
  encode: (params: R) => Promise<string>;
}

export enum DatabaseMethods {
  Post = "add",
  Get = "get",
  Put = "update",
  Delete = "delete",
}

export type DatabaseResponse<T = any> = {
  statusCode: DatabaseReturnStatusCode;
  body: T;
};
