import api from "../api";
import { APIResponse } from "../types/apiResponse";
import { UserData } from "../types/entities/user";

export const getAuthenticatedUser = (): APIResponse<UserData> => {
  return api.get(`profile`);
};
