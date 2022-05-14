import { AxiosPromise } from "axios";

export type APIResponse<TData> = AxiosPromise<{
  message: string;
  data: TData;
}>;
