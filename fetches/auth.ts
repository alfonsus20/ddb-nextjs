import api from "../api";
import { APIResponse } from "../types/apiResponse";
import { LoginParams } from "../types/entities/auth";
import { UserData } from "../types/entities/user";

export const login = (data: LoginParams): APIResponse<{token : string}> => {
  return api.post(`login`, data);
};

export const getAuthenticatedUser = (): APIResponse<UserData> => {
  return api.get(`profile`);
};
