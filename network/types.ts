export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: object | null;
  requestBody?: FormData | unknown | string;
  isMultipart?: boolean;
}

export interface ErrorData {
  error: string;
  message: string;
  statusCode: number;
}
