import api from "../api";
import { APIResponse, APIResponsePaginated } from "../types/apiResponse";
import { Paginated } from "../types/entities";
import { UserData } from "../types/entities/user";

export const getUsers = (
  params?: object
): APIResponsePaginated<Array<UserData> & Paginated> => {
  return api.get(`users`, { params });
};

export const getAllUsers = (): APIResponse<Array<UserData>> => {
  return api.get("users/findAll");
};

export const getUserById = (id: number): APIResponse<UserData> => {
  return api.get(`users/${id}`);
};

export const deleteUser = (id: number): APIResponse<UserData> => {
  return api.delete(`users/${id}`);
};
