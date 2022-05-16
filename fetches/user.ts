import api from "../api";
import { APIResponse, APIResponsePaginated } from "../types/apiResponse";
import { Paginated } from "../types/entities";
import { UserData } from "../types/entities/user";

export const getUsers = (
  params?: object
): APIResponsePaginated<Array<UserData> & Paginated> => {
  return api.get(`users`, { params });
};

export const getAllUsers = (
  isGraduated: boolean = false
): APIResponse<Array<UserData>> => {
  return api.get("users/findAll", { params: { isGraduated } });
};

export const getUserById = (id: number): APIResponse<UserData> => {
  return api.get(`users/${id}`);
};

export const deleteUser = (id: number): APIResponse<UserData> => {
  return api.delete(`users/${id}`);
};

export const uploadProfileImage = (file: File): APIResponse<string> => {
  const formData = new FormData();
  formData.append("image", file);
  return api.post("users/profileImageUpload", formData);
};
