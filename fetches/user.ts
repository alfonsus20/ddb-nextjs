import api from "../api";
import { APIResponse } from "../types/apiResponse";
import { UserData } from "../types/entities/user";

export const getUsers = (params?: string): APIResponse<Array<UserData>> => {
  return api.get(`users?${params}`);
};

export const getAllUsers = (): APIResponse<Array<UserData>> => {
  return api.get("users/findAll");
};

export const getUserById = (id: number): APIResponse<UserData> => {
  return api.get(`users/${id}`);
};
