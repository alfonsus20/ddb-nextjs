import { AxiosPromise } from "axios";

export type APIResponse<TData> = AxiosPromise<{
  code: string;
  message: string;
  data: TData;
}>;
