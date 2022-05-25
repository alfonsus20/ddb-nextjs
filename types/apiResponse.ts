import { AxiosPromise } from "axios";
import { Paginated } from "./entities";

export type APIResponse<TData> = AxiosPromise<{
  message: string;
  data: TData;
}>;

export type APIResponsePaginated<TData> = AxiosPromise<{
  message: string;
  data: TData;
} & Paginated>;
