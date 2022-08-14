import axios, { AxiosError } from "axios";
import { set } from "lodash";
import qs from "qs";
import { getAuthToken } from "@utils/localStorage.utils";
import { ErrorData, HttpMethod, RequestParams } from "./types";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const customAxios = axios.create({
  timeout: 10000,
  paramsSerializer: (params: unknown) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
  withCredentials: false,
  baseURL,
});

customAxios.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    set(config, "headers.authorization", token);
  }
  return config;
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ErrorData>) => {
    // if (axios.isAxiosError(error)) {
    //   const { response } = error || {};
    //   if (response) {
    //     const commonError: ErrorData = {
    //       error: response.data.error,
    //       statusCode: response.data.statusCode,
    //       message: _.isArray(response.data.message)
    //         ? response.data.message[0]
    //         : response.data.message,
    //     };
    //     return Promise.reject(commonError);
    //   }
    // }
    //
    // return Promise.reject(error);
  }
);

export const request = async ({
  method,
  url,
  queryParams,
  requestBody,
  isMultipart,
}: RequestParams) => {
  let headers = {};

  if (isMultipart) {
    headers = { "Content-Type": "multipart/form-data" };
  }

  switch (method) {
    case HttpMethod.GET:
      return customAxios.get(url, { params: queryParams, headers });
    case HttpMethod.POST:
      return customAxios.post(url, requestBody, {
        params: queryParams,
        headers,
      });
    case HttpMethod.PUT:
      return customAxios.put(url, requestBody, {
        params: queryParams,
        headers,
      });
    case HttpMethod.DELETE:
      return customAxios.delete(url);
    default:
      return Promise.reject(new Error("Invalid HttpMethod"));
  }
};

export default customAxios;
